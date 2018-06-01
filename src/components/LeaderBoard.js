import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LeaderBoard extends Component {
  render() {
    const {authedUser, users} = this.props
    if(authedUser === null){
      return <Redirect to='/loggin' />
    }
    return (
      <div className="learderBoardBlock">
        <h3 className='center'>Leaders Board</h3>
        <ol>
          {users.map((user) => {
            return (
              <li>
                <div className="learderBoardList">
                  <img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                  /> 
                  <div>
                    <div>{user.name}</div>
                    <div>Questions Answered {Object.keys(user.answers).length}</div>
                    <div>Questions Asked {user.questions.length}</div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users:Object.values(users).sort((a,b) =>{
     return Object.keys(b.answers).length - Object.keys(a.answers).length
    }),
    authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard)