import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA'

export function getInitialUsers() {
    return _getUsers()
        .then(users => ({
           users 
        }))
}

export function getInitialCards() {
    return _getQuestions()
        .then(questions => ({
            questions 
        }))
}

export function saveToAPICard (info) {
    return _saveQuestion(info)
}

export function saveToAPICardAnswer (info) {
    return _saveQuestionAnswer(info)
}
