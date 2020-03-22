import axios from 'axios';
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

axios.default.baseURL = "http://0.0.0.0:8000"

import { GET_INSTITUTIONS, DELETE_INSTITUTION, ADD_INSTITUTION, ADD_HELPER } from './types';


// GET Institutions
export const getInstitutions = () => (dispatch, getState) => {
    axios.get('http://backend:8000/api/institutions/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_INSTITUTIONS,
            payload: res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE INSTITUTION
export const deleteInstitution = (id) => (dispatch, getState) => {
    axios.delete(`/api/institutions/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ institutionDeleted: 'Institution deleted!' }))
        dispatch({
            type: DELETE_INSTITUTION,
            payload: id
        })
    }).catch(err => console.log(err));
};

// ADD INSTITUTION
export const addInstitution = (institution) => (dispatch, getState) => {
    console.log('add institution')
    axios.post("/api/institutions/", institution, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: ADD_INSTITUTION,
            payload: res.data
        })
    }).catch(err => console.log(err))
}
