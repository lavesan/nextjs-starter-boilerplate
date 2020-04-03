import moment from "moment";

export const validateEmail = value => {
    return {
        valid: /^[.a-zA-Z0-9]+@(?:[a-zA-Z]+\.?)+[a-zA-Z]$/g.test(value),
        message: 'Email inválido.',
    };
}

export const validateCpf = value => {
    return {
        valid: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),
        message: 'CPF inválido.'
    };
}

export const validateOnlyNumber = value => {
    return {
        valid: /\d*/g.test(value),
        message: 'Apenas números.',
    };
}

export const isRequired = value => {
    return {
        valid: Boolean(value),
        message: 'Obrigatório.',
    };
}

export const isRequireTrue = value => {
    return {
        valid: value,
        message: 'Obrigatório marcar.',
    };
}

export const maxValue = (value, max) => {
    const numberValue = Number(value);
    return {
        valid: numberValue <= max,
        message: `O valor máximo é ${max}`,
    };
}

export const minValue = (value, min) => {
    const numberValue = Number(value);
    return {
        valid: numberValue >= min,
        message: `O valor mínimo é ${min}`,
    };
}

export const maxLength = (value, max) => {
    return {
        valid: value.length <= max,
        message: `No mínimo ${max} caractéres.`,
    }
}

export const minLength = (value, min) => {
    return {
        valid: value.length >= min,
        message: `No mínimo ${min} caractéres.`,
    }
}

export const isEqualTo = (value1, value2, errorMessage) => {
    return {
        valid: value1 === value2,
        message: errorMessage,
    }
}

export const notNullable = value => {
    return {
        valid: value !== null || value !== undefined || value !== '',
        message: 'Obrigatório.'
    }
}

export const isCardNumber = value => {
    return {
        valid: /^\d{4} \d{4} \d{4} \d{4}$/.test(value),
        message: 'Número do cartão inválido',
    }
}

export const isValidThroughDate = value => {
    return {
        valid: /^\d{2}\/\d{2}$/.test(value),
        message: 'Data inválida',
    }
}

export const isCellphoneNumber = value => {
    return {
        valid: /^\(?\d{2}\)? ?\d{5}-?\d{4}$/.test(value),
        message: 'Número inválido',
    }
}

export const isValidDate = value => {

    const momentDate = moment(value, 'YYYY-MM-DD');

    return {
        valid: momentDate.isBefore(moment()),
        message: 'Selecione uma data depois da atual.',
    }

}

export const isBrDate = value => {
    return {
        valid: /^\d{2}\/\d{2}\/\d{2}$/.test(value),
        message: 'Data inválida',
    }
}
