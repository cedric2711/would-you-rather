import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    // case ADD_QUESTION :
    //   const { question } = action

    //   let replyingTo = {}
    //   if (tweet.replyingTo !== null) {
    //     replyingTo = {
    //       [tweet.replyingTo]: {
    //         ...state[tweet.replyingTo],
    //         replies: state[tweet.replyingTo].replies.concat([tweet.id])
    //       }
    //     }
    //   }

    //   return {
    //     ...state,
    //     [action.tweet.id]: action.tweet,
    //     ...replyingTo,
    //   }
    case ANSWER_QUESTION :
      return {
        ...state,
        [action.question.qid]:{
          ...state[action.question.qid],
          [action.question.answer]: {
            ...state[action.question.qid][action.question.answer],
            votes: state[action.question.qid][action.question.answer].votes.concat([action.question.authedUser])
          }  
        }
      }
      // return {
      //   users = {
      //     ...users,
      //     [authedUser]: {
      //       ...users[authedUser],
      //       answers: {
      //         ...users[authedUser].answers,
      //         [qid]: answer
      //       }
      //     }
      //   }
  
      //   questions = {
      //     ...questions,
      //     [qid]: {
      //       ...questions[qid],
      //       [answer]: {
      //         ...questions[qid][answer],
      //         votes: questions[qid][answer].votes.concat([authedUser])
      //       }
      //     }
      //   }
      // }
    default :
      return state
  }
}