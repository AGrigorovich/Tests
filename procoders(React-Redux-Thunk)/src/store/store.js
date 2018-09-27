import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootStore from '../reducers/generalReducerWithThunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : func => func;
const store = createStore(
    rootStore,
    devTools,
    compose(applyMiddleware(thunk)));

export default store;
