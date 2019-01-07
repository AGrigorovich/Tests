import {createStore, combineReducers} from 'redux';

import {initialState} from '../constants/consts';

const orderReducer = function (state = initialState, action) {
    if (action.type === 'CHANGE_SELECTED_ITEMS') {
        return ({
            ...state
        })
    }
    if (action.type === 'MOUSE_ENTER_COMPONENT') {
        return ({
            ...state,
        })
    }
    if (action.type === 'MOUSE_LEAVE_COMPONENT') {
        return ({
            ...state,
        })
    }
    return state
};

const store = createStore(combineReducers({orderReducer}));

export default store;
