export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const ADD_USER_CARD = 'ADD_USER_CARD'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        ...users
    }
}

export function saveUserAnswer (authedUser, questionId, answer) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser,
        questionId,
        answer
    }
}

export function addUserCard (authedUser, id) {
    return {
        type: ADD_USER_CARD,
        authedUser,
        id,
    }
}