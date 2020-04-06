const initialState = {
    userInfo: {
        id: '',
        email: '',
        token: '',
        contacts: [],
        addresses: [],
        cards: [],
    },
    token: '',
    selectedForm: 'login',
    loginForm: {
        email: '',
        password: '',
    },
    accessRegisterForm: {
        name: '',
        cpf: '',
        email: '',
        password: '',
        confirmPassword: '',
        termOfContract: false,
    },
    personalRegisterForm: {
        gender: 1,
        role: 0,
        age: '',
        animalsQuantity: '0',
        childrensQuantity: '0',
        description: '',
    },
    addressRegisterForm: {
        cep: '',
        address: '',
        number: '',
        district: 'Piedade',
        complement: '',
        type: '',
    },
    loginFormValidations: {},
    accessFormValidations: {},
    personalFormValidations: {},
    addressFormValidations: {},
    registerFormStep: 1,
};
export const authReducer = (state = initialState, action) => {
    // Este 'state' é o state total passado
    // O 'action' é o valor alterado
    const handleReducer = {
        SET_FORM_VALUES() {
            return {
                ...state,
                [action.form]: {
                    ...state[action.form],
                    [action.name]: action.value,
                }
            }
        },
        SET_REGISTER_FORM_ACCESS() {
            return {
                ...state,
                accessRegisterForm: {
                    ...state.accessRegisterForm,
                    [action.name]: action.value,
                }
            }
        },
        SET_REGISTER_FORM_PERSONAL() {
            return {
                ...state,
                personalRegisterForm: {
                    ...state.personalRegisterForm,
                    [action.name]: action.value,
                }
            }
        },
        SET_REGISTER_FORM_ADDRESS() {
            return {
                ...state,
                addressRegisterForm: {
                    ...state.addressRegisterForm,
                    [action.name]: action.value,
                }
            }
        },
        SET_REGISTER_FORM_ADDRESS_MANY_VALUES() {
          return {
              ...state,
              addressRegisterForm: {
                  ...state.addressRegisterForm,
                  ...action.addressRegisterForm,
              }
          }  
        },
        CHANGE_SELECTED_FORM() {
            return {
                ...state,
                selectedForm: action.selectedForm,
            }
        },
        SET_USER_INFO() {
            return {
                ...state,
                userInfo: action.userInfo ? action.userInfo : state.userInfo,
                token: action.token ? action.token : state.token,
            }
        },
        SET_REGISTER_FORM_STEP() {
            return {
                ...state,
                registerFormStep: action.registerFormStep,
            }
        },
        SET_LOGIN_FORM_VALIDATIONS() {
            return {
                ...state,
                loginFormValidations: {
                    ...state.loginFormValidations,
                    ...action.loginFormValidations,
                },
            }
        },
        SET_ACCESS_VALIDATIONS() {
            return {
                ...state,
                accessFormValidations: {
                    ...state.accessFormValidations,
                    ...action.accessFormValidations,
                }
            }
        },
        SET_PERSONAL_VALIDATIONS() {
            return {
                ...state,
                personalFormValidations: {
                    ...state.personalFormValidations,
                    ...action.personalFormValidations,
                }
            }
        },
        SET_ADDRESS_VALIDATIONS() {
            return {
                ...state,
                addressFormValidations: {
                    ...state.addressFormValidations,
                    ...action.addressFormValidations,
                }
            }
        },
        ADVANCE_RETURN_REGISTER_FORM_STEP() {
            return {
                ...state,
                registerFormStep: action.plus ? state.registerFormStep + 1 : state.registerFormStep - 1,
            }
        },
        CLEAR_USER_INFO() {
            return {
                ...state,
                userInfo: {
                    id: '',
                    email: '',
                    token: '',
                    contacts: [],
                    addresses: [],
                    cards: [],
                },
                token: '',
            }
        },
    }

    return handleReducer[action.type] ?
        handleReducer[action.type]() :
        state;
};