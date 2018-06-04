import React from 'react'
import { connect } from 'react-redux'

const ErrorPage = ({authedUser, questions}) => (
  <div>
    <p>Page not found</p>
  </div>
)

export default connect()(ErrorPage)