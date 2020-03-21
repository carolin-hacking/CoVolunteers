import { GET_MESSAGES } from '../actions/types'

const initalState = {
    msg: {},
    status: null
}

export default function(state=initalState, action) {
    switch(action.type) {
        case GET_MESSAGES:
            return action.payload;
        default:
            return state;
    }
}