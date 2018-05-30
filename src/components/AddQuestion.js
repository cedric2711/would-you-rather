import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {
  state = {
    optionTwoText: '',
    optionOneText: '',
    enableButton: false,
    toHome: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
        
    const {dispatch} = this.props
    const {optionOneText,optionTwoText } = this.state
    dispatch(handleAddQuestion(optionOneText, optionOneText))
    this.setState(() => ({
      optionTwoText: '',
      optionOneText: '',
      enableButton: false,
      toHome: true
    }))
  }
  validateOptions = (option, optionText) =>{
    const {optionOneText, optionTwoText} = this.state
    
    if(option==="optionOne" && optionText.length && optionTwoText.length){
      return true
    }else if(option==="optionTwo" && optionText.length && optionOneText.length){
      return true
    }
    return false
  }
  handleChange = (e) => {
    var optionText=e.target.value
    var validateValue= false;
    if(e.target.getAttribute('id')==="optionOne"){
      validateValue=this.validateOptions('optionOne', optionText)
      this.setState(() =>({
        optionOneText: optionText,
        enableButton: validateValue
      }))
    }else if(e.target.getAttribute('id')==="optionTwo"){
      validateValue=this.validateOptions('optionTwo', optionText)
      this.setState(() =>({
        optionTwoText: optionText,
        enableButton: validateValue
      }))
    }
  }
  
  render() {
    const {optionOneText, optionTwoText, enableButton, toHome }= this.state
    if(this.props.loading){
      return <Redirect to='/loggin' />
    }
    if(toHome){
      return <Redirect to='/' />
    }
    return (
      <div className="newQuestion">
          <h3 className='center'>What would you ask?</h3>
          <form className='loggin-window' onSubmit={this.handleSubmit}>
          <label>Question 1</label>
          <textarea
            placeholder="What is your first queston?"
            value={optionOneText}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
            id="optionOne"
          />
          <label>Question 2</label>
          <textarea
            placeholder="What is your second queston?"
            value={optionTwoText}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
            id="optionTwo"
          />
            <button
              className='btn'
              type='submit'
              disabled={!enableButton}>
                Submit
            </button>
          </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(AddQuestion)