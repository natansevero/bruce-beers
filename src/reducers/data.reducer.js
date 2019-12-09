import { ADD_DATA, FETCH_DATA } from './../actions/types'

const INITIAL_STATE = {
    info: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_DATA:
            return { ...state, info: action.payload }

        case FETCH_DATA:
            return { ...state, info: action.payload }

        default:
            return state
    }
}
