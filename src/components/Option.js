import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'
import { div, withRouter } from 'react-router-dom'

class Question extends Component {
  handleChoise = (e) => {
    e.preventDefault()

    const { option, id, dispatch, questionAnswer } = this.props

    dispatch(handleQuestionAnswer({
        id, 
        answer: questionAnswer
    }))
  }
  // toParent = (e, id) => {
  //   e.preventDefault()
  //   this.props.history.push(`/tweet/${id}`)
  // }
  render() {
    const { option, id } = this.props

    if (text === null) {
      return <p>This Question doesn't existd</p>
    }
    const {
      text, votes
    } = option
    return (
    <div className="optionBlock">
        <div onClick={this.handleChoise}>
            {text}
        </div>
        {votes.length && (
            <div>{votes.length}</div>
        )}
    </div>
    )
  }
}
export default connect()(Question)