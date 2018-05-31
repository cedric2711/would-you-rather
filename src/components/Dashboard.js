import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

import AddQuestion from './AddQuestion'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const {authedUser, questionsIDs, questions} = this.props
    if(this.props.loading){
      return <Redirect to='/loggin' />
    }
    return (
      <div>
        <h3 className='center'>What Whould You Do?</h3>
        <ul className='dashboard-list'>
          {questions.filter((question) => {
            return (question.optionOne.votes.indexOf(authedUser) === -1 && question.optionTwo.votes.indexOf(authedUser) === -1)
          }).map((question) => (
            <li key={question.id}>
              <Question id={question.id}/>
            </li>
          ))}
        </ul>
        <h4>Answered</h4>
        <ul className='dashboard-list'>
          {questions.filter((question) => {
            return (question.optionOne.votes.indexOf(authedUser) !== -1 || question.optionTwo.votes.indexOf(authedUser) !== -1)
          }).map((question) => (
            <li key={question.id}>
              <Question id={question.id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    loading: authedUser === null,
    questions:Object.values(questions).sort((q1,q2) => q2.timestamp - q1.timestamp),
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)