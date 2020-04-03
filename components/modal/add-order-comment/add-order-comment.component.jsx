import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { useToasts } from "react-toast-notifications";

import { ModalComponent } from '../';
import { StyledAddOrderCommentModal } from './add-order-comment.styles';
import { toogleAddOrderCommentModal, toogleOrderToFinishModal } from '../../../store/actions/modalActions';
import { numberStringToReal } from '../../../helpers/calc.helpers';
import { removeAllFirstDigits, unmaskDistrictName } from '../../../helpers/unmask.helpers';
import { orderInstance } from '../../../services/order.service';
import { SucessButtonComponent } from '../../../components/button';
import { FormBlankTextarea } from '../../../components/form/form-blank-textarea';
import { setCommentStepValues } from '../../../store/actions/orderActions';

const AddOrderCommentModal = ({
    openAddOrderCommentModal,
    products,
    scheduleStep,
    cardStep,
    addressStep,
    commentStep,
    token,
    dispatch,
}) => {

    const orderService = orderInstance.getInstance();

    const { addToast } = useToasts();

    const [loading, setLoading] = useState(false);

    const showToast = message => {
        addToast(message, {
            appearance: "error",
            autoDismiss: true
          })
    }

    const toggleModal = () => {
        dispatch(toogleAddOrderCommentModal());
    }

    const setFieldValue = (name, value) => {
        dispatch(setCommentStepValues({
            name,
            value,
        }));
    }

    const valueFromProduct = product => {
        return product.promotionalValueCents
            ? numberStringToReal(product.promotionalValueCents)
            : numberStringToReal(product.actualValueCents);
    }

    const onSubmit = async e => {
        
        e.preventDefault();

        setLoading(true);

        const deletedImgsProducts = products.map(product => {

            delete product.imgUrl;

            return product;

        })

        const combos = deletedImgsProducts.filter(product => product.isCombo);
        const onlyProducts = deletedImgsProducts.filter(product => !product.isCombo);

        const paymentMethod = cardStep.payLatter ? cardStep.paymentType : 1;
        const changeValuesFormated = cardStep.changeValueCents ? `${cardStep.changeValueCents.replace(/\D/g, '')}00` : '';
        const unmaskedDistrict = addressStep.district.label ? unmaskDistrictName(addressStep.district.label) : unmaskDistrictName(addressStep.district);

        let body = {
            type: paymentMethod,
            payed: cardStep.payLatter,
            description: cardStep.descriptions,
            description: commentStep.description,
            receive: {
                date: moment(scheduleStep.date).format('DD/MM/YYYY'),
                time: scheduleStep.time,
            },
            saveAddress: addressStep.saveAddress,
            address: {
                id: addressStep.id,
                cep: addressStep.cep,
                district: unmaskedDistrict,
                address: addressStep.address,
                number: addressStep.number,
                complement: addressStep.complement,
            },
            products: onlyProducts,
            combos,
        };

        if (changeValuesFormated) {
            body.changeValueCents = changeValuesFormated;
        }

        if (!token) {

            const phoneOnlyNumber = addressStep.phoneNumber.replace(/\D/g, '');
            const ddd = phoneOnlyNumber.match(/^\d{2}/);
            const number = phoneOnlyNumber.match(/\d{9}$/);

            body = {
                ...body,
                userName: addressStep.userName,
                contact: {
                    ddd,
                    number,
                    type: 0,
                }
            }

        }

        await orderService.save(body)
            .then(res => {
                toggleModal();
                dispatch(toogleOrderToFinishModal(res));
            })
            .catch(({ message }) => {
                showToast(message);
            })

        setLoading(false);

    }

    return (
        <ModalComponent toggleModal={toggleModal} show={openAddOrderCommentModal}>
            <StyledAddOrderCommentModal onSubmit={onSubmit}>
                <div className="title-container">
                    <h2>Adicionar comentário</h2>
                </div>
                <div className="modal-body">
                    <h3 className="products-title" style={{ marginBottom: 0 }}>Produtos</h3>
                    {products.map(product =>
                        <div className="product-row">
                            <p><b>{product.quantity}{removeAllFirstDigits(product.quantitySuffix)} {product.name}</b></p>
                            <p className="product-row--price">{valueFromProduct(product)}</p>
                        </div>
                        )
                    }
                    <h3 className="products-title second-titles">Deseja adicionar um comentário sobre os produtos?</h3>
                    <div>
                        <FormBlankTextarea
                            legend="Ex.: abacates bem maduros"
                            name="description"
                            isOptional={true}
                            setFieldValue={setFieldValue}
                            value={commentStep.description} />
                    </div>
                    <div className="button-container">
                        <SucessButtonComponent
                            type="submit"
                            text="Prosseguir"
                            loading={loading} />
                    </div>
                </div>
            </StyledAddOrderCommentModal>
        </ModalComponent>
    )

}

const mapStateToProps = store => ({
    openAddOrderCommentModal: store.modalState.openAddOrderCommentModal,
    products: store.cartState.products,
    scheduleStep: store.orderState.scheduleStep,
    cardStep: store.orderState.cardStep,
    addressStep: store.orderState.addressStep,
    token: store.authState.token,
    commentStep: store.orderState.commentStep,
})

export default connect(mapStateToProps)(AddOrderCommentModal);