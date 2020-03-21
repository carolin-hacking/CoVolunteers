import { GET_INSTITUTIONS, DELETE_INSTITUTION, ADD_INSTITUTION, ADD_HELPER_TO_INST } from '../actions/types.js'

const initialState = {
    institutions: [], 
    institutionID: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_INSTITUTION:
            return {
                ...state,
                institutions: [...state.institutions, action.payload]
            };
        
        case GET_INSTITUTIONS:
            return {
                ...state,
                institutions: action.payload
            };
        case DELETE_INSTITUTION:
            return {
                ...state,
                institutions: state.institutions
            };
        case ADD_HELPER_TO_INST:
            return {
                ...state,
                institutions: [...state.institutions.filter(institution => institution.id !== action.payload.id), action.payload]
            }
        default: 
            return state;
    }
}