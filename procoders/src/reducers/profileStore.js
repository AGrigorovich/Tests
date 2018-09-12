import {initialState} from '../constants';

const profileReducer = function (state = initialState, action) {
    if (action.type === 'GET_USER_DATA') {
        return ({
            ...state,
            isLoading: true,
        })
    }
    if (action.type === 'GET_USER_DATA_SUCCESS') {
        return ({
            ...state,
            isLogin: true,
            isLoading: false,
            userData: action.payload,
        })
    }
    if (action.type === 'GET_USER_DATA_ERROR') {
        return ({
            ...state,
            error: action.payload,
            isLoading: false,
        })
    }
    return state
};

export default profileReducer;
