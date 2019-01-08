import {createStore, combineReducers} from 'redux';

import {initialState} from '../constants/consts';

const orderReducer = function (state = initialState, action) {
    if (action.type === 'CHANGE_SELECTED_ITEMS') {
        return ({
            ...state, order:{ ...state.order, [action.payload.itemsName]:action.payload.value}
        })
    }
    if (action.type === 'MOUSE_ENTER_COMPONENT') {
        return ({
            ...state, ...{mouseOnComponent: action.payload},
        })
    }
    if (action.type === 'MOUSE_LEAVE_COMPONENT') {
        return ({
            ...state, ...{mouseOnComponent: action.mouseOnComponent},
        })
    }
    return state
};

const store = createStore(combineReducers({orderReducer}));

export default store;
