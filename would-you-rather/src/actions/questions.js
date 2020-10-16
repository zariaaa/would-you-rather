export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_CARDS,
        questions,
    }
}