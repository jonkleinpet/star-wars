import React from 'react'

export default function NotFoundError(props) {
  console.log(props)
  return (
    props.error ?
    <>
      <h3>{props.errorMessage}</h3>
      <button onClick={() => props.updateError()}>Back</button>
    </>
    :
    <></>
  ) 
}
