import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Calculator = () => {
  const [result, setResult] = useState('0')
  const [text, setText] = useState('')

  const addInput = (value) => {
    if (
      (operations.includes(value) && text === '') ||
      (operations.includes(value) && operations.includes(text.slice(-1))) ||
      (value === '.' && text.slice(-1) === '.')
    ) {
      return
    } else {
      setText(text + value)
    }
    if (result !== '0') {
      if (operations.includes(value)) {
        setText(result + value)
      }
    } else {
      setText(text + value)
    }
  }
  const evaluateResult = () => {
    setResult(eval(text).toString())
  }
  const clearInput = () => {
    setText('')
    setResult('0')
  }

  const deleteInput = () => {
    if (text === '') {
      return
    }
    let newText = text.slice(0, -1)
    setText(newText)
  }

  const symbols = [7, 8, 9, 4, 5, 6, 1, 2, 3]
  const operations = ['/', '*', '-', '+']

  return (
    <div>
      <h1>REACT Calculator App</h1>
      <div className="calculator-container" title="calculator-container">
        <div>
          <h2>CASHEW FX 991ES</h2>
          <Input text={text} result={result} />
          <div className="buttons-container">
            <Button
              symbol={'ac'}
              handleClick={clearInput}
              customClassName={'clear-button'}
              buttonDivClass={'two-span-button'}
            ></Button>
            <Button
              symbol={'c'}
              handleClick={deleteInput}
              customClassName={'delete-button'}
            ></Button>
            {operations.map((op, i) => (
              <Button
                symbol={op}
                key={i}
                handleClick={addInput}
                customClassName={'operations-button'}
              ></Button>
            ))}
            <Button
              symbol={'='}
              handleClick={evaluateResult}
              customClassName={'equals-button'}
            ></Button>
            <div className="digits-container">
              {symbols.map((symbol, i) => (
                <Button symbol={symbol} key={i} handleClick={addInput}></Button>
              ))}
              <Button
                symbol={'0'}
                handleClick={addInput}
                customClassName={'calc-button-zero'}
                buttonDivClass={'two-span-button'}
              ></Button>
              <Button symbol={'.'} handleClick={addInput}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
