import { combineReducers }  from 'redux';

import userReducer from './userReducer';
import {initialState as userState} from './userReducer';

import navigationReducer from './navigationReducer';
import {initialState as navigationState} from './navigationReducer';

export default combineReducers({
    user: userReducer,
    navigation: navigationReducer,

});
export const initialStates = {
    userState,
    navigationState,
};
