import React, { Component } from 'react'
import '../main.css'

export default class Main extends Component {
    
  render() { 

    console.log(this.props)
    const char = this.props.state;

    const characters = char.map((c, i) => {

      return (
        <li key={i}>

          <h2>{c.name}</h2>
          <div>Gender: {c.gender}</div>
          <div>Height: {c.height}</div>
          <div>Eye Color: {c.eye_color}</div>
          <div>Hair Color: {c.hair_color}</div>
          <div>Skin Color: {c.skin_color}</div>
                         
        </li>
      )
    })

    return(
      !this.props.errorMessage ?   
      <ul>
          <div>{characters}</div>
      </ul> 
      :
      <h3>{this.props.errorMessage}</h3>
    )
  }
}
