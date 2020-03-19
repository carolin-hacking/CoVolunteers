import axios from 'axios';
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_HELPERS, DELETE_HELPER, ADD_HELPER } from './types';

// GET HELPERS
export const getHelpers = () => (dispatch, getState) => {
    axios.get('/api/helpers/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_HELPERS,
            payload: res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE HELPER
export const deleteHelper = (id) => (dispatch, getState) => {
    axios.delete(`/api/helpers/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ helperDeleted: 'Helper deleted!' }))
        dispatch({
            type: DELETE_HELPER,
            payload: id
        })
    }).catch(err => console.log(err));
};

// ADD HELPER
export const addHelper = (helper) => (dispatch, getState) => {
    axios.post("/api/helpers/", helper, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ helperAdded: 'Helper added!' }))
        dispatch({
            type: ADD_HELPER,
            payload: res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};