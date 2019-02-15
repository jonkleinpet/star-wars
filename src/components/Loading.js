import React from 'react'
import Loadicon from './loading.gif'

export default class Loading extends React.Component {
  
  render() {
    
    const isLoading = this.props.isLoading;

    return (
      isLoading ?
      <span>
        <img className='loading' alt='loading icon' src={Loadicon}/>
      </span>
      :
      <></>
    )
  }
}
