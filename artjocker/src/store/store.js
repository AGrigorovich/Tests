import {createStore, combineReducers} from 'redux';

const defaultValue = {
    items:
        [
            {select: 'Twin', number: 22},
            {select: 'Tripple', number: 12},
            {select: 'Quadro', number: 4}
        ],
    open: true,
    title: 'Структура номеров',
    options: ['Twin', 'Tripple', 'Quadro']
}

const itemsReducer = function (state = defaultValue, action) {
    if (action.type === 'CLOSE_WINDOW') {
        return ({
            ...state, ...{open: action.open, items: []},
    })
    }
    if (action.type === 'DELETE_FIELD') {
        let stateCopy = JSON.parse(JSON.stringify(state.items));
        stateCopy.splice(action.index, 1);
        return ({
            ...state, ...{items: [...stateCopy]}
        })
    }
    if (action.type === 'ADD_FIELD') {
        let stateCopy = JSON.parse(JSON.stringify(state.items));
        stateCopy.push({select: 'newData', number: 100});
        return ({
            ...state, ...{items: [...stateCopy]}
        })
    }
    if (action.type === 'CHANGE_INPUT_VALUE') {
        let stateCopy = JSON.parse(JSON.stringify(state.items));
        stateCopy[action.index].number = +action.newValue;
        return ({
            ...state, ...{items: [...stateCopy]}
        })
    }
    if (action.type === 'CHANGE_SELECT_VALUE') {
        let stateCopy = JSON.parse(JSON.stringify(state.items));
        stateCopy[action.index].select = action.newValue;
        return ({
            ...state, ...{items: [...stateCopy]}
        })
    }
    if (action.type === 'SAVE_CHANGES') {
        //here we can saved our object (state.items) to localStorage or database
        return ({
            ...state, ...{open: action.open, items: []},
        })
    }
    return state
}
const store = createStore(combineReducers({itemsReducer}));
export default store;