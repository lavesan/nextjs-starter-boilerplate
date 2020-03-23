import React, { useMemo, useState } from 'react';

import { StyledTextArea } from './form-textarea.styles';
import { StyledFieldset } from '../form-field/form-field.styles';

export default ({ label, className, setFieldValue, name, legend, maskOnChange, validatesOnChange = [], setFormValidations, formValidations, startValidations, ...textareaProps }) => {

    const [activateValidation, setActivationValidation] = useState(false);

    // Activates the validation
    const onFocousOut = () => {
        setActivationValidation(true);
    }

    const applyValidations = value => {
        
        if (validatesOnChange.length) {

            for (const validationFunc of validatesOnChange) {

                const validation = validationFunc(value, name);
    
                setFormValidations(function(f) {
                    return {
                        ...f,
                        [name]: {
                            invalid: !validation.valid,
                            message: validation.message,
                        },
                    }
                });
    
                if (!validation.valid) {
                    break;
                }

            }

        }

    }

    const onChange = (e) => {

        const finalValue = maskOnChange ? maskOnChange(e.target.value) : e.target.value;
        onChange(name, finalValue);
        applyValidations(value);

    }

    const startErrorValidation = useMemo(
        () => {
            return (startValidations || activateValidation) ? (formValidations[name] && formValidations[name].invalid ? 'true' : '') : '';
        },
        [startValidations, activateValidation, formValidations]
    )

    return (
        <StyledFieldset className={className}>
            <label htmlFor={name}>{label}</label>
            {legend ? <legend>{legend}</legend> : ''}
            <StyledTextArea
                id={name}
                name={name}
                onChange={onChange}
                rows={6}
                onFocousOut={onFocousOut}
                error={startErrorValidation}
                {...textareaProps} />
        </StyledFieldset>
    )

}
