import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
    const { question, authedUser, user } = this.props

    if (question === null) {
      return <p>This Question doesn't existd</p>
    }
    const {
      author, optionOne, optionTwo
    } = question

    const {avatarURL, name} = user
    const displayVoting = (optionOne.votes.indexOf(authedUser) !== -1 || optionTwo.votes.indexOf(authedUser) !== -1) ? true : false
    const totalAnswers = optionOne.votes.length + optionTwo.votes.length

    return (
      <Link to={`/question/${question.id}`} className='question'>
        <div className="wouldYouRather">
          <h3>Would you rather?</h3>
          <div className="createdBy">
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              className='avatar'
            />
            <span className="authorName">
              question Created by {author}
            </span>
          </div>
          <div className="questionBlock">
            <Option key={question.id + "A"} option={optionOne} id={question.id} questionAnswer="optionOne" displayVoting={displayVoting} totalAnswers={totalAnswers} />
            <span>OR</span>
            <Option key={question.id + "B"} option={optionTwo} id={question.id} questionAnswer="optionTwo" displayVoting={displayVoting} totalAnswers={totalAnswers} />
          </div>
        </div>
      </Link>
    )
  }
}
function mapStateToProps({ questions, authedUser, users }, { id }) {
  const question = questions[id]
  return {
    question: question
      ? question
      : null,
    authedUser: authedUser
      ? authedUser
      : null,
    user: users[question.author]
  }
}
export default connect(mapStateToProps)(Question)