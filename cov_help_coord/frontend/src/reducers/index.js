import { combineReducers } from 'redux';
import helpers from './helpers';
import errors from './errors'
import messages from './messages'

export default combineReducers({
    helpers,
    errors,
    messages
});