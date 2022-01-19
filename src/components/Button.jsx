import React from 'react'

const Button = ({ symbol, handleClick, customClassName, buttonDivClass }) => {
  let buttonClass = 'calc-button'
  return (
    <div className={buttonDivClass}>
      <button
        className={`${customClassName} ${buttonClass}`}
        onClick={() => handleClick(symbol)}
      >
        {symbol}
      </button>
    </div>
  )
}

export default Button
