import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { handleToggleTweet } from '../actions/questions'
import { Link, withRouter } from 'react-router-dom'
import Option from './Option'

class Question extends Component {
  // handleLike = (e) => {
  //   e.preventDefault()

  //   const { dispatch, question, authedUser } = this.props

  //   dispatch(handleToggleTweet({
  //     id: tweet.id,
  //     hasLiked: tweet.hasLiked,
  //     authedUser
  //   }))
  // }
  // toParent = (e, id) => {
  //   e.preventDefault()
  //   this.props.history.push(`/tweet/${id}`)
  // }
  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't existd</p>
    }
    const {
      author, optionOne, optionTwo
    } = question
    return (
      <div>
        <h3>Would you rather?</h3>
        <div className="questionBlock">
          <Option key ={question.id+"A"} option={optionOne} id={question.id} questionAnswer="optionOne"/>
          <span>OR</span>
          <Option key ={question.id+"B"} option={optionTwo} id={question.id} questionAnswer="optionTwo"/>
        </div>
        <div>
          question Created by {author}
        </div>
      </div>
    )
  }
}
function mapStateToProps ({questions}, { id }) {
  const question = questions[id]
  return {
    question: question
      ? question
      : null
  }
}
export default connect(mapStateToProps)(Question)