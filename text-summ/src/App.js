
import './App.css';
import React,{useState} from 'react';
function App() {
  const [text,setText]  = useState("")
  return (
    <div className="App">
      <textarea className="text-area" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
    </div>
  );
}

export default App;
