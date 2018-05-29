import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { setAuthedUser } from '../actions/authedUser'

class Dashboard extends Component {
  logoutUser = (e) => {
    const {dispatch} = this.props
    dispatch(setAuthedUser(null))
  }
  render() {
    return (
      <div>
        <div className="navigation">
          <div className="leftNav"></div>
          <div className="rightNav" onClick={this.logoutUser}>
            Log Out
          </div>
        </div>
        <h3 className='center'>What Whould You Do?</h3>
        <ul className='dashboard-list'>
          {this.props.questionsIDs.map((id) => (
            <li key={id}>
                <Question id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionsIDs: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)