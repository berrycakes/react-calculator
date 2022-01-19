import React from 'react'

const Input = ({ result, text }) => {
  return (
    <div className="display-container">
      <div className="text" title="input">
        {text}
      </div>
      <div className="result" title="result">
        {result}
      </div>
    </div>
  )
}

export default Input
