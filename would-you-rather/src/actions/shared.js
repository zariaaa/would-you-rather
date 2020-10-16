import { receiveUsers, saveUserAnswer, addUserCard } from '../actions/users'
import { receiveCards, saveCardAnswer, addCard } from './cards'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialUsers } from '../utils/api'
import { getInitialCards } from '../utils/api'
import { saveToAPICardAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveToAPICard } from '../utils/api'

export function handleInitialCards () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialCards()
            .then((questions) => {
                dispatch(receiveCards(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleInitialUsers (AUTHED_ID) {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
        })
    }
  }

export function handleSaveCardAnswer (questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveToAPICardAnswer({authedUser, questionId, answer})
            .then(() => {
                dispatch(saveCardAnswer(authedUser, questionId, answer))
                dispatch(saveUserAnswer(authedUser, questionId, answer))
                dispatch(hideLoading())
            })  
    }
}

export function handleAddCard (QuestionOneText, QuestionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const author = authedUser
        dispatch(showLoading())
        return saveToAPICard({QuestionOneText, QuestionTwoText, author})
            .then((card) => {
                dispatch(addCard(card))
                dispatch(addUserCard(authedUser, card.id))
                dispatch(hideLoading())
            })
    }
}