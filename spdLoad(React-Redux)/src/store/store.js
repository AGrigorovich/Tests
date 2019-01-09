import {createStore, combineReducers} from 'redux';

import {initialState} from '../constants/consts';

const orderReducer = function (state = initialState, action) {
    if (action.type === 'CHANGE_SELECTED_ITEMS') {
        return ({
            ...state, defaultValues: {
                ...state.defaultValues, [action.payload.containerIndex]:
                    {...state.defaultValues[action.payload.containerIndex], itemsValue: action.payload.itemsValue}
            }
        })
    }
    if (action.type === 'CHANGE_CHECKBOX_ITEMS') {
        return ({
            ...state, order: {...state.order, checkboxes: action.payload}
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
            ...state, defaultValues:{...state.defaultValues, ...initialState.defaultValues}
        })
    }
    return state
};

const makeOrderReducer = function (state = initialState, action) {
    if (action.type === 'CHANGE_SELECTED_ITEMS') {
        return ({
            ...state, order: {...state.order, [action.payload.itemsName]: action.payload.itemsValue}
        })
    }
    return state;
};

const store = createStore(combineReducers({orderReducer, makeOrderReducer}));

export default store;
