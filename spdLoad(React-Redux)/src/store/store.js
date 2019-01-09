import {createStore, combineReducers} from 'redux';

import {initialState} from '../constants/consts';

const orderReducer = function (state = initialState, action) {
    if (action.type === 'CHANGE_SELECTED_ITEMS') {
        return ({
            ...state, order: {...state.order, [action.payload.itemsName]: action.payload.value}
        })
    }
    if (action.type === 'MOUSE_ENTER_COMPONENT') {
        return ({
            ...state, ...{popupParams: action.payload},
        })
    }
    if (action.type === 'MOUSE_LEAVE_COMPONENT') {
        return ({
            ...state, ...{popupParams: action.popupParams},
        })
    }
    if (action.type === 'GET_DATA_FROM_API') {
        return ({
            ...state, ...{dataFromApi: {...action.data}}
        })
    }
    if (action.type === 'CLEAR_ORDER') {
        return ({
            ...state, order: {...state.order, ...state.defaultValue}
        })
    }
    return state
};

const store = createStore(combineReducers({orderReducer}));

export default store;
