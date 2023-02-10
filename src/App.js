import './App.css';
import {useState,useRef,useEffect} from 'react'
function App() {
  const [count,setCount] = useState(0)
  
  const inc = () => {
    setCount(count+1)
  }
  const dec = () => {
    setCount(count-1)
  }
  return (
    <div className="App">
      <div>
        <p>a</p>
        <p>{count}</p>
        <button onClick={inc} >+</button>
        <button onClick={dec}>-</button>
      </div>
      <div>
        <p>b</p>
        <p>{count}</p>
        <button onClick={inc} >+</button>
        <button onClick={dec}>-</button>
      </div>
      <div>
        <p>c</p>
        <p>{count}</p>
        <button onClick={inc} >+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}

export default App;
