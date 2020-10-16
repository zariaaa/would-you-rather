import { RECEIVE_CARDS } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CARDS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}

