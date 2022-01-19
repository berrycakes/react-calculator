import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('check if addition button renders', () => {
  render(<App />)
  const buttonElement = screen.getByText('+')
  expect(buttonElement).toBeInTheDocument()
})

test('check if result initial display is 0', () => {
  render(<App />)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe('0')
})

test('check if input display is updating upon button press', () => {
  render(<App />)
  const buttonElement = screen.getByText('7')
  fireEvent.click(buttonElement)
  const displayElement = screen.getByTitle('input')
  expect(displayElement.innerHTML).toBe('7')
})

test('check if delete button is working', () => {
  render(<App />)
  const buttonElement = screen.getByText('7')
  const deleteButton = screen.getByText('c')
  fireEvent.click(buttonElement)
  fireEvent.click(buttonElement)
  fireEvent.click(buttonElement)
  fireEvent.click(deleteButton)
  const displayElement = screen.getByTitle('input')
  expect(displayElement.innerHTML).toBe('77')
})

test('check if addition is working', () => {
  render(<App />)
  const buttonTwoElement = screen.getByText('2')
  const buttonThreeElement = screen.getByText('3')
  const add = screen.getByText('+')
  const equals = screen.getByText('=')
  fireEvent.click(buttonTwoElement)
  fireEvent.click(add)
  fireEvent.click(buttonThreeElement)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe((2 + 3).toString())
})

test('check if subtraction is working', () => {
  render(<App />)
  const buttonTwoElement = screen.getByText('2')
  const buttonThreeElement = screen.getByText('3')
  const subtract = screen.getByText('-')
  const equals = screen.getByText('=')
  fireEvent.click(buttonTwoElement)
  fireEvent.click(subtract)
  fireEvent.click(buttonThreeElement)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe((2 - 3).toString())
})
test('check if multiplication is working', () => {
  render(<App />)
  const buttonTwoElement = screen.getByText('2')
  const buttonThreeElement = screen.getByText('3')
  const multiply = screen.getByText('*')
  const equals = screen.getByText('=')
  fireEvent.click(buttonTwoElement)
  fireEvent.click(multiply)
  fireEvent.click(buttonThreeElement)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe((2 * 3).toString())
})
test('check if division is working', () => {
  render(<App />)
  const buttonTwoElement = screen.getByText('2')
  const buttonThreeElement = screen.getByText('3')
  const divide = screen.getByText('/')
  const equals = screen.getByText('=')
  fireEvent.click(buttonTwoElement)
  fireEvent.click(divide)
  fireEvent.click(buttonThreeElement)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe((2 / 3).toString())
})
