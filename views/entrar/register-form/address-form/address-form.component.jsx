import React from 'react';
import { connect } from 'react-redux';

import { onlyCharactersMask, onlyNumberMask } from '../../../../helpers/mask.helpers';
import { validateOnlyNumber, isRequired } from '../../../../helpers/validations.helpers';
import { StyledFullRevSuccessButton } from '../../../../components/button';
import { StyledAddressForm } from './address-form.styles';
import { FormTextMaterial } from '../../../../components/form/form-text-material';
import { StyledFormTitle } from '../register-form.styles';
import { authInstance } from '../../../../services/auth.service';
import { setRegisterFormManyValues } from '../../../../store/actions/authActions';

const AddressFormComponent = ({ setFormValidations, formValidations, setFieldValue, values, isResponsive, startValidations, dispatch }) => {

    const authService = authInstance.getInstance()

    const searchCep = () => {

        authService.findCep(values.cep)
            .then(({ data }) => {
                dispatch(setRegisterFormManyValues({
                    address: data.logradouro,
                    complement: data.complemento,
                    district: data.bairro,
                }));
            })
            .catch(err => {
                console.log('deu pau: ', err);
            });

    }

    return (
        <StyledAddressForm isResponsive={isResponsive}>
            <StyledFormTitle isResponsive={isResponsive}>
                <h2>Endereço</h2>
                <p className="section-description">Informe detalhadamente seu endereço para fazermos a melhor entrega possível</p>
            </StyledFormTitle>
            <div className="row">
                <div className="w-60">
                    <FormTextMaterial
                        label="Seu CEP"
                        name="cep"
                        startValidations={startValidations}
                        formValidations={formValidations}
                        setFormValidations={setFormValidations}
                        validatesOnChange={[isRequired, validateOnlyNumber]}
                        maskOnChange={onlyNumberMask}
                        value={values.cep}
                        onChange={setFieldValue} />
                </div>
                <div className="w-30 search-button-container">
                    <StyledFullRevSuccessButton
                        type="button"
                        notDense={isResponsive ? 'true' : ''}
                        onClick={searchCep}>
                        Pesquisar
                    </StyledFullRevSuccessButton>
                </div>
            </div>
            <div className="row">
                <div className="w-60">
                    <FormTextMaterial
                        label="Rua"
                        name="address"
                        startValidations={startValidations}
                        validatesOnChange={[isRequired]}
                        formValidations={formValidations}
                        setFormValidations={setFormValidations}
                        value={values.address}
                        onChange={setFieldValue} />
                </div>
                <div className="w-30">
                    <FormTextMaterial
                        label="Número"
                        name="number"
                        startValidations={startValidations}
                        validatesOnChange={[isRequired, validateOnlyNumber]}
                        formValidations={formValidations}
                        setFormValidations={setFormValidations}
                        maskOnChange={onlyNumberMask}
                        value={values.number}
                        onChange={setFieldValue} />
                </div>
            </div>
            <div className="row">
                <FormTextMaterial
                    label="Bairro"
                    name="district"
                    startValidations={startValidations}
                    formValidations={formValidations}
                    setFormValidations={setFormValidations}
                    validatesOnChange={[isRequired]}
                    maskOnChange={onlyCharactersMask}
                    value={values.district}
                    onChange={setFieldValue} />
                <FormTextMaterial
                    label="Complemento"
                    name="complement"
                    startValidations={startValidations}
                    formValidations={formValidations}
                    setFormValidations={setFormValidations}
                    validatesOnChange={[isRequired]}
                    value={values.complement}
                    onChange={setFieldValue} />
            </div>
            <FormTextMaterial
                label="Descrição"
                name="type"
                startValidations={startValidations}
                formValidations={formValidations}
                setFormValidations={setFormValidations}
                validatesOnChange={[isRequired]}
                value={values.type}
                onChange={setFieldValue} />
        </StyledAddressForm>
    )

}

export default connect()(AddressFormComponent);
