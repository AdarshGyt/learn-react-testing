import './App.css';
import {useState} from 'react'

export const replaceCamelWithSpaces = (colorName) =>{
  return colorName.replace(/\B([A-Z])\B/g, " $1")
} 


function App() {
  const [color, setColor] = useState('red')
  const [checked, setChecked] = useState(false)
  const newButton = color === 'red' ? 'blue': 'red'

  return (
    <div className="App" >
      <button
        style={{backgroundColor:checked ? 'gray': color}}
        onClick={()=> setColor(newButton)}
        disabled={checked}
      >
      {`change to ${newButton}`}
      </button>
      <input 
        type='checkbox' 
        id='disable-button-checkbox'
        aria-checked={checked}
        value={checked} 
        defaultChecked={checked} 
        onChange={(e)=> setChecked(e.target.checked)}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>  
  );
}

export default App;
