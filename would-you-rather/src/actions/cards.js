export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const SAVE_CARD_ANSWER = 'SAVE_CARD_ANSWER'
export const SAVE_CARD = 'SAVE_CARD'
export const ADD_CARD = 'ADD_CARD'

export function receiveCards (questions) {
    return {
        type: RECEIVE_CARDS,
        ...questions
    }
}

export function saveCardAnswer (authedUser, questionId, answer) {
    return {
        type: SAVE_CARD_ANSWER,
        authedUser,
        questionId,
        answer
    }
}

export function addCard (card) {
    return {
        type: ADD_CARD,
        card,
    }
}