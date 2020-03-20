import { GET_INSTITUTIONS, DELETE_INSTITUTION, ADD_INSTITUTION } from '../actions/types.js'

const initialState = {
    institutions: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_INSTITUTIONS:
            return {
                ...state,
                institutions: action.payload
            };
        case DELETE_INSTITUTION:
            return {
                ...state,
                institutions: state.institutions.filter(institution => institution.id !== action.payload)
            };
        case ADD_INSTITUTION:
            return {
                ...state,
                institutions: [...state.institutions, action.payload]
            };
        default: 
            return state;
    }
}