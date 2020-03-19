import axios from 'axios';
import { createMessage, returnErrors } from './messages'

import { GET_HELPERS, DELETE_HELPER, ADD_HELPER } from './types';

// GET HELPERS
export const getHelpers = () => dispatch => {
    axios.get('/api/helpers/')
    .then(res => {
        dispatch({
            type: GET_HELPERS,
            payload: res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE HELPER
export const deleteHelper = (id) => dispatch => {
    axios.delete(`/api/helpers/${id}/`)
    .then(res => {
        dispatch(createMessage({ helperDeleted: 'Helper deleted!' }))
        dispatch({
            type: DELETE_HELPER,
            payload: id
        })
    }).catch(err => console.log(err));
};

// ADD HELPER
export const addHelper = (helper) => dispatch => {
    axios.post("/api/helpers/", helper)
    .then(res => {
        dispatch(createMessage({ helperAdded: 'Helper added!' }))
        dispatch({
            type: ADD_HELPER,
            payload: res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};