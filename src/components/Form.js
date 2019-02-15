import React, { Component } from 'react'
import ValidateNameError from './ValidateNameError'

export default class Form extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      isError: false,
      formValid: false,
      message: ''
    }
  }

  updateName(name) {
    this.setState({ name }, () => this.validName(name))
  }

  validName(name) {

    let hasError = false;
    let message = this.state.message;
    name = name.trim();

    if (name.length === 0) {
      message = 'Please enter a name';
      hasError = true;

    } else {
      message = '';
      hasError = false;
    }

    this.setState({
      message: message,
      isError: !hasError
    })
  }
  
  clearInput() {
    document.querySelector('form').reset()
  }

  render() {
    const getCharacters = this.props.props

    this.handleSubmit = (e) => {
      e.preventDefault()     
      getCharacters(this.state.name);

    }

    return(
      !this.props.error ?
      <form onSubmit={ (e) => this.handleSubmit(e) }>
          <label>Enter Name of StarWars Character:
          <input id="name" onChange={ (e) => this.updateName(e.target.value) } placeholder="Han Solo" type="text"></input>
        </label>
        <button type="submit" onClick={this.clearInput} disabled={!this.state.isError}>Submit</button>
        
        <ValidateNameError hasError={!this.state.isError} message={this.state.message} />
      </form>
      :
      <h3>{this.props.error}</h3>
    )
  }
}
