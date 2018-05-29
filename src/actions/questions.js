import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

function addQuestionAnswer (question) {
  return {
    type: ANSWER_QUESTION,
    question,
  }
}

export function handleQuestionAnswer (response) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    var questionAnswer={
      authedUser,
      qid: response.id,
      answer: response.answer
    }
    dispatch(addQuestionAnswer(questionAnswer))

    return saveQuestionAnswer(questionAnswer)
      .catch((e) => {
        console.warn('Error in handleQuestionAnswer: ', e)
        dispatch(addQuestionAnswer(questionAnswer))
        alert('The was an error liking the tweet. Try again.')
      })
    // dispatch(showLoading())

    // return saveQuestionAnswer({
    //   authedUser,
    //   qid:response.id,
    //   answer:response.answer
    // })
    //   .then((question) => dispatch(addQuestionAnswer(question)))
    //   .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}