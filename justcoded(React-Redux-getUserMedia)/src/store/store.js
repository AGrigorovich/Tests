import {createStore, combineReducers} from 'redux';

const loginReducer = function (state = {}, action) {
    if (action.type === 'USER_LOGIN') {
        return ({
            ...state, ...{isLogin: action.isLogin},
        })
    }
    return state
}
const store = createStore(combineReducers({loginReducer}));

export default store;
