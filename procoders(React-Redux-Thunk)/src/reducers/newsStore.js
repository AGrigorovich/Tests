import {initialState} from '../constants';

const newsReducer = function (state = initialState, action) {
    if (action.type === 'GET_NEWS') {
        return ({
            ...state,
            isLoading: true,
        })
    }
    if (action.type === 'GET_NEWS_SUCCESS') {
        return ({
            ...state,
            isLogin: true,
            isLoading: false,
            news: action.payload,
        })
    }
    if (action.type === 'GET_NEWS_ERROR') {
        return ({
            ...state,
            error: action.payload,
            isLoading: false,
        })
    }
    return state
};

export default newsReducer;
