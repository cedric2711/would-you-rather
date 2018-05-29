import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'
import { div, withRouter } from 'react-router-dom'

class Question extends Component {
  handleChoise = (e) => {
    e.preventDefault()

    const { option, id, dispatch, questionAnswer, displayVoting } = this.props
    if(!displayVoting){
      dispatch(handleQuestionAnswer({
          id, 
          answer: questionAnswer
      }))
    }
  }
  // toParent = (e, id) => {
  //   e.preventDefault()
  //   this.props.history.push(`/tweet/${id}`)
  // }
  render() {
    const { option, id, displayVoting, totalAnswers} = this.props
    const {
      text, votes
    } = option

    if (text === null) {
      return <p>This Question doesn't existd</p>
    }
    const percentage = Math.round((votes.length * 100) / totalAnswers)
    return (
    <div className="optionBlock">
        <div onClick={this.handleChoise}>
            {text}
        </div>
        {displayVoting && (
            <div>{percentage}%</div>
        )}
    </div>
    )
  }
}
export default connect()(Question)