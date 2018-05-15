import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import Dashboard from './Dashboard'
// import LoadingBar from 'react-redux-loading'
// import NewTweet from './NewTweet'
// import TweetPage from './TweetPage'
// import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)