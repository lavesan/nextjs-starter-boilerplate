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
};
export const authReducer = (state = initialState, action) => {
    // Este 'state' é o state total passado
    // O 'action' é o valor alterado
    const handleReducer = {
        SET_USER_INFO() {
            return {
                ...state,
                userInfo: action.userInfo,
            }
        },
    }

    return handleReducer[action.type] ?
        handleReducer[action.type]() :
        state;
};