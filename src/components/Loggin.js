import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Loggin extends Component {
  state = {
    userChosen: false,
    userName: '',
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const {dispatch} = this.props
    const {userChosen, userName } = this.state
    if(userChosen){
      dispatch(setAuthedUser(userName))
    }
  }

  handleChange = (e) => {
    debugger
    const {userChosen } = this.state
    const userName = e.target.value
    if(e.target.value){
      this.setState(() =>({
        userChosen: true,
        userName: userName
      }))
    }
  }
  
  render() {
    const {users}= this.props
    const {userChosen }= this.state
    
    if (users === undefined || users.length=== 0) {
      return <p>Users not available</p>
    }
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div>
            <h3 className='center'>Sign in to choose your fate</h3>
            <form className='loggin-window' onSubmit={this.handleSubmit}>
              <select
                placeholder="What's happening?"
                onChange={this.handleChange}
                className=''
              >
                <option disabled selected>-- select an user --</option>
                {users.map((user) => {
                 return <option value = {user.id}>{user.name}</option>
                })}
              </select>

              <button
                className='btn'
                type='submit'
                disabled={!userChosen}>
                  Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const userArray= [];
  for (var user in users){
    userArray.push(users[user]);
  }
  return {
    users: userArray
  }
}
export default connect(mapStateToProps)(Loggin)