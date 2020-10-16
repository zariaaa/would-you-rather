import { RECEIVE_CARDS, SAVE_CARD_ANSWER, ADD_CARD } from '../actions/cards'

export default function questions(state= {}, action) {
    switch(action.type) {
        case RECEIVE_CARDS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_CARD_ANSWER:
        const { authedUser, questionId, answer } = action
        return {
            ...state,
            [questionId]: {
              ...state[questionId],
              [answer]: {
                ...state[questionId][answer],
                votes: state[questionId][answer].votes.concat([authedUser])
              }
            }
          }
        case ADD_CARD: 
          return {
            ...state,
            [action.card.id]: action.card
          }
        default:
            return state
    }
}