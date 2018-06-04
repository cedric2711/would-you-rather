import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Loggin from './Loggin'
import LoadingBar from 'react-redux-loading'
import AddQuestion from './AddQuestion'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import ErrorPage from './ErrorPage'
// import TweetPage from './TweetPage'
 import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            
            <Route path='/' exact component={Dashboard} />
            <Route path='/add' component={AddQuestion} />
            <Route path='/loggin' component={Loggin} />
            <Route path='/question/:question_id' component={QuestionPage} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/404_page' component={ErrorPage} />          
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)