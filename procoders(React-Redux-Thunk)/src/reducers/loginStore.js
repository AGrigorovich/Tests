import {initialState} from '../constants';

const loginStore = function (state = initialState, action) {
    if (action.type === 'USER_DATA_LOGIN') {
        return ({
            ...state,
            isLoading: true,
            error: false,
        })
    }
    if (action.type === 'USER_LOGIN_SUCCESS') {
        return ({
            ...state,
            isLogin: true,
            isLoading: false,
            userId: action.payload,
        })
    }
    if (action.type === 'USER_LOGIN_ERROR') {
        return ({
            ...state,
            error: action.payload,
            isLoading: false,
        })
    }
    if (action.type === "USER_EXIT") {
        return ({
            ...state,
            isLogin: false
        })
    }
    return state
};

export default loginStore;
