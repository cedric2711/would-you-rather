import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
  render() {
    const {question_id, questions} = this.props
    // if(this.props.loading){
    //   return <Redirect to='/loggin' />
    // }
    if(this.props &&  questions  && questions[question_id]== null){
      return <Redirect to='/404_page' />
    }
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
    questions,
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(QuestionPage)