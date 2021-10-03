import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); //helps rendering component into VDOM
  const linkElement = screen.getByText(/learn react/i);  //getbyText search in VDOM
  expect(linkElement).toBeInTheDocument(); 
});
