import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

const Dashboard = ({authedUser, questions}) => (
  <div>
    <h3 className='center'>What Whould You Do?</h3>
    <ul className='dashboard-list'>
      {questions.filter((question) => {
        return (
          question.optionOne.votes.indexOf(authedUser) === -1 
          && 
          question.optionTwo.votes.indexOf(authedUser) === -1
        )
      }).map((question) => (
        <li key={question.id}>
          <Question id={question.id}/>
        </li>
      ))}
    </ul>
    {authedUser===null? null:
    <div>
      <h4>Answered</h4>
      <ul className='dashboard-list'>
        {questions.filter((question) => {
          return (
            question.optionOne.votes.indexOf(authedUser) !== -1 
            || 
            question.optionTwo.votes.indexOf(authedUser) !== -1
          )
        }).map((question) => (
          <li key={question.id}>
            <Question id={question.id}/>
          </li>
        ))}
      </ul>
      </div>
    }
  </div>
)


function mapStateToProps ({ questions, authedUser }) {
  return {
    loading: authedUser === null,
    questions:Object.values(questions).sort((q1,q2) => q2.timestamp - q1.timestamp),
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)