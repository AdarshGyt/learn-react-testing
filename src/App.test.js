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

test('checkbox initially unchecked', ()=>{
  render(<App />)
  const checkbox = screen.getByRole('checkbox', {checked:false})
  expect(checkbox).toBeChecked('false')
})
