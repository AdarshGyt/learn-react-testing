import './App.css';
import {useState} from 'react'

function App() {
  const [color, setColor] = useState('red')
  const newButton = color === 'red' ? 'blue': 'red'

  return (
    <div className="App" >
      <button
        style={{backgroundColor: color}}
        onClick={()=> setColor(newButton)}
      >
      {`change to ${newButton}`}
      </button>
    </div>  
  );
}

export default App;
