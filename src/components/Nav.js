import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

//export default function Nav () {
class Nav extends Component {
  logoutUser = (e) => {
    const {dispatch} = this.props
    dispatch(setAuthedUser(null))
  }
  render () {
    return (
      <nav className='nav'>
        <div className="leftNav">
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active'>
                Add Question
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="rightNav">
            <ul>
            <li>Hello {this.props.authedUser}</li>
            <li>
              {
                this.props.loading?
                  <NavLink to='/loggin' activeClassName='active'>
                    Log in
                  </NavLink>
                  :<div onClick={this.logoutUser}>Logout</div>
              }
            </li>
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)