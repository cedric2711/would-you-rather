import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
  render() {
    const {authedUser, question_id, question} = this.props
    // if(this.props.loading){
    //   return <Redirect to='/loggin' />
    // }
    return (
      <div>
        <h3 className='center'>What Whould You Do?</h3>
        <Question id={question_id}/>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }, props) {
  const { question_id } = props.match.params
// 8xf0y6ziyjabvozdd253nd
  return {
    question_id,
    question: questions[question_id],
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(QuestionPage)