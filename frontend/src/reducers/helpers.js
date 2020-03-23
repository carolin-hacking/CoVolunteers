import { GET_HELPERS, DELETE_HELPER, ADD_HELPER, UPDATE_HELPER } from '../actions/types.js'

const initialState = {
    helpers: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HELPERS:
            return {
                ...state,
                helpers: action.payload
            };
        case DELETE_HELPER:
            return {
                ...state,
                helpers: state.helpers.filter(helper => helper.id !== action.payload)
            };
        case ADD_HELPER:
            return {
                ...state,
                leads: [...state.helpers, action.payload]
            };
        case UPDATE_HELPER:
        return {
            ...state,
            helpers: [...state.helpers.filter(helper => helper.id !== action.payload.id), action.payload]
        }
        default: 
            return state;
    }
}