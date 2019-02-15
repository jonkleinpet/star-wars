import React from 'react'

export default function ValidateNameError(props) {
  if (props.hasError) {
    return <h3 className="error">{props.message}</h3>
  }
  return <></>
}
