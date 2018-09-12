import {combineReducers} from 'redux';

import loginReducer from './loginStore';
import newsReducer from './newsStore';
import profileReducer from './profileStore';

const rootStore =
    combineReducers({
        loginStore: loginReducer,
        newsStore: newsReducer,
        profileStore: profileReducer,
    })

export default rootStore;
