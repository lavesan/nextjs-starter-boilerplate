import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import Calendar from "react-calendar";
import moment from 'moment';

import { setScheduleStepValues, setScheduleValidation } from '../../../../store/actions/orderActions';
import { StyledSchedulerStepForm } from './scheduler-step-form.styles';
import { TimeFormComponent } from './time-form';
import { orderInstance } from '../../../../services/order.service';
import { StyledOrderFormTitle } from '../save-order-stepper.styles';
import { FormResponsiveDatePicker } from '../../../../components/form/form-responsive-date-picker';
import { isRequired, isValidDate, isBrDate } from '../../../../helpers/validations.helpers';

const SchedulerStepFormComponent = ({ dispatch, scheduleStep, scheduleValidations, submitted, isResponsive }) => {

    const orderSerivce = orderInstance.getInstance();

    const [freeTimes, setFreeTimes] = useState([]);
    const [loadingTime, setLoadingTime] = useState(false);

    const setFormValidations = validation => {
        dispatch(setScheduleValidation(validation));
    }

    const startDate = moment().day() !== 0 ? new Date() : moment().add(1, 'date').toDate();

    const deactiveDate = ({ date }) => {
        
        const momentDate = moment(date);
        return momentDate.day() === 0 || momentDate.isBefore(moment());

    }

    const setFieldValue = (name, value) => {

        dispatch(setScheduleStepValues({
            name,
            value,
        }));

    }

    useEffect(
        () => {
            if (!scheduleStep.date) {
                dispatch(setScheduleValidation({
                    time: {
                        invalid: !Boolean(scheduleStep.time),
                    },
                }));
            }
        },
        [scheduleStep.time]
    );

    const handleChange = useCallback(
        async () => {
            
            const parsedDate = scheduleStep.date
                ? moment(scheduleStep.date).format('DD/MM/YYYY')
                : moment().format('DD/MM/YYYY');

            setLoadingTime(true);
            const times = await orderSerivce.getFreeTimesFromDate(parsedDate)
                .catch(err => console.log('erro: ', err));
            setLoadingTime(false);

            dispatch(setScheduleStepValues({
                name: 'time',
                value: '',
            }));

            setFreeTimes(times ? times.activeTimes : []);

        },
        [scheduleStep.date]
    )

    useEffect(() => {
        handleChange();
    }, [handleChange])

    useEffect(() => {
        setFieldValue('date', new Date());
    }, []);

    return (
        <StyledSchedulerStepForm isResponsive={isResponsive}>
            <StyledOrderFormTitle>Horário e data de entrega</StyledOrderFormTitle>
            <div className="scheduler-form-container">
                {isResponsive
                    ? <FormResponsiveDatePicker
                        label="Selecione uma data"
                        name="date"
                        setFormValidations={setFormValidations}
                        formValidation={scheduleValidations.date}
                        validatesOnChange={[isRequired, isBrDate, isValidDate]}
                        value={scheduleStep.date}
                        startValidations={submitted}
                        placeholder="Escolha uma data"
                        setFieldValue={setFieldValue} />
                    : <div>
                        <h3>Selecione uma data</h3>
                        <Calendar
                            onChange={(value) => setFieldValue('date', value)}
                            value={scheduleStep.date || startDate}
                            tileDisabled={deactiveDate}
                            locale="pt-br" />
                    </div>
                }
                <div className="scheduler-form-container--time-form">
                    <h3>Selecione um horário</h3>
                    <TimeFormComponent
                        name="time"
                        times={freeTimes}
                        error={submitted && scheduleValidations.time.invalid}
                        value={scheduleStep.time}
                        setFieldValue={setFieldValue}
                        loading={loadingTime} />
                </div>
            </div>
        </StyledSchedulerStepForm>
    )

}

const mapStateToProps = store => ({
    scheduleStep: store.orderState.scheduleStep,
    scheduleValidations: store.orderState.scheduleValidations,
})

export default connect(mapStateToProps)(SchedulerStepFormComponent);
