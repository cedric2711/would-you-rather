import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'
import { div, Redirect } from 'react-router-dom'

class Option extends Component {
  state = {
    logginRequied:false
  }
  handleChoise = (e) => {
    e.preventDefault()

    const {id, dispatch, questionAnswer, displayVoting, authedUser } = this.props
    if(authedUser=== null){
      this.setState(() => ({logginRequied:true}))
    } else if(!displayVoting){
      dispatch(handleQuestionAnswer({
          id, 
          answer: questionAnswer
      }))
    }
  }

  render() {
    const { option, displayVoting, totalAnswers, authedUser} = this.props
    const {
      text, votes
    } = option
    if( this.state.logginRequied){
      return <Redirect to='/loggin' />
    }
    if (text === null) {
      return <p>This Question doesn't existd</p>
    }
    const percentage = Math.round((votes.length * 100) / totalAnswers)
    const classNameString=(votes.indexOf(authedUser) === -1)?"optionBlockText notanswered":"optionBlockText answerd"
    return (
    <div className="optionBlock">
        <div className={classNameString} onClick={this.handleChoise}>
            {text}
        </div>
        {displayVoting && (
            <div>{votes.length} people chose this option that's {percentage}%</div>
        )}
    </div>
    )
  }
}

function mapStateToProps ({ authedUser }, props) {
  return {
    props,
    authedUser
  }
}
export default connect(mapStateToProps)(Option)