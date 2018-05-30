import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

import AddQuestion from './AddQuestion'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const {authedUser, questionsIDs} = this.props
    if(this.props.loading){
      return <Redirect to='/loggin' />
    }
    return (
      <div>
        <h3 className='center'>What Whould You Do?</h3>
        <ul className='dashboard-list'>
          {questionsIDs.map((id) => {

            return (<li key={id}>
                    <Question id={id}/>
                  </li>)
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    questionsIDs: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(Dashboard)