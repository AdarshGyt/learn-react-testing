import './App.css';
import {useState} from 'react'

function App() {
  const [color, setColor] = useState('red')
  const [checked, setChecked] = useState(false)
  const newButton = color === 'red' ? 'blue': 'red'

  return (
    <div className="App" >
      <button
        style={{backgroundColor: color}}
        onClick={()=> setColor(newButton)}
        disabled={checked}
      >
      {`change to ${newButton}`}
      </button>
      <input 
        type='checkbox' 
        id='enable-button-checkbox'
        aria-checked={checked}
        value={checked} 
        defaultChecked={checked} 
        onChange={(e)=> setChecked(e.target.checked)}
        />
    </div>  
  );
}

export default App;
