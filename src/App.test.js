import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

//test('renders learn react link', () => {
  // render(<App />); //helps rendering component into VDOM
  // const linkElement = screen.getByText(/learn react/i);  //getbyText search in VDOM
  // expect(linkElement).toBeInTheDocument(); 
//});


test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});


test('button turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name:'change to blue'})
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor:'blue'})
  expect(colorButton.textContent).toBe('change to red')
});


test('initial conditions', ()=>{
  render(<App />)
  const button = screen.getByRole('button', {name:'change to blue'})
  const checkbox = screen.getByRole('checkbox', {name:'Disable button'})
  
  expect(button).toBeEnabled()
  expect(checkbox).not.toBeChecked()

})


test('checkbox disable button on first click and diable on second click', ()=>{
  render(<App />)
  const button = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox')
  

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})



test('first flow with button red', ()=>{
  render(<App />)
  const button = screen.getByRole('button', {name:'change to blue'})
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor:'gray'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor:'red'})

})

test('second flow with button blue initially', ()=>{
  render(<App />)
  const button = screen.getByRole('button', {name:'change to blue'})
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(button)

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor:'gray'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor:'blue'})

})