import { GET_BEERS, GET_ONE_BEER } from '../actions/types'

const INITIAL_STATE = {
    list: [],
    single: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_BEERS:
            return { ...state, list: action.payload, single: {} }

        case GET_ONE_BEER:
            return { ...state, single: action.payload, list: [] }

        default:
            return state
    }
}
