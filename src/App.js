import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Main from './components/Main'
import Form from './components/Form'
import './App.css';
import NotFoundError from './NotFoundError'
import Loading from './components/Loading'

class App extends Component {

    state = {
      characters: [],
      nameNotFound: false,
      errorMsg: '',
      loading: false
    };

  //get matching characters from api
  getCharacters = (name) => {
    const url = 'https://swapi.co/api/'
    fetch(`${url}people/?search=${name}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("can't get character")
      }
      return res.json()
    })
    .then(res => {
      if (res.count === 0) {
        this.setState({
          nameNotFound: true,
          errorMsg: 'Character does not Exist!'
         })     
      }
        return res
      })
      .then(data => data.results.map(item => item))
      .then(res => {
        this.setState({characters: res})
        return res
      })
      .catch(error => <Form error={error}/>)
  }

  updateError = () => {
    this.setState({ nameNotFound: false, errorMsg: '' })
  }


  render() {
    const results  = this.state.characters
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Find your Favorite Star Wars character!</h1>
        </header>
        <Loading isLoading={this.state.loading}/>
        <Form props={this.getCharacters} />
          <Route exact path='/'>
            <Main state={results} />
          </Route>

        <NotFoundError
        errorMessage={this.state.errorMsg}
        error={this.state.nameNotFound}
        updateError={this.updateError}
        /> 
      </div>
      
    );
  }
}

export default App;
