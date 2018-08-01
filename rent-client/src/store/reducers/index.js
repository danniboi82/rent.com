import {combineReducers } from 'redux';
import errors from './errors';
import currentUser from './currentUser';

const rootReducer = combineReducers({
    currentUser,
    errors
});

export default rootReducer;