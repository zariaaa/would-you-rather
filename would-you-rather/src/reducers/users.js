import { RECEIVE_USERS, SAVE_USER_ANSWER, ADD_USER_CARD } from '../actions/users'

export default function user(state= {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
        const { authedUser, questionId, answer } = action
        return {
            ...state,
            [authedUser]: {
            ...state[authedUser],
            answers: {
                ...state[authedUser].answers,
                [questionId]: answer
            }
            }
        }
        case ADD_USER_CARD: 
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.id])
                }
            }
        default:
            return state
    }
}