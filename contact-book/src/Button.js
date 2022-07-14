import React from 'react'

export const Button = ({handleClick,Data}) => {
  return (
    <>
<button onClick={() => handleClick(Data)}>Delete</button>
    
    </>
  )
}
