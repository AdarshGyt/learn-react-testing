import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

//test('renders learn react link', () => {
// render(<App />); //helps rendering component into VDOM
// const linkElement = screen.getByText(/learn react/i);  //getbyText search in VDOM
// expect(linkElement).toBeInTheDocument(); 
//});


test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'change to Midnight Blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
});


test('button turns Midnight Blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'change to Midnight Blue' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(colorButton).toHaveTextContent('change to Medium Violet Red')
});


test('initial conditions', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'change to Midnight Blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  expect(button).toBeEnabled()
  expect(checkbox).not.toBeChecked()

})


test('checkbox disable button on first click and diable on second click', () => {
  render(<App />)
  const button = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox')


  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})



test('first flow with button MediumVioletRed', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'change to Midnight Blue' })
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

})

test('second flow with button Midnight Blue initially', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'change to Midnight Blue' })
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(button)

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })

})

//combines tests
describe('spaces before camel case letters', () => {
  test('Words for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Words for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Words for mutiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})