
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
const config = require("./config.json")
function App() {
  const [text,setText]  = useState("")
  const handleClick = async()=>{
    const response = await axios.post("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {inputs:text},
    {
      headers:{
        Authorization: `Bearer ${config.url}`
      }
    }
    )
    console.log(response.data)
  }
  const handleBtn = ()=>{
    alert(`${process.env.REACT_APP_URL}`)
  }
  return (
    <div className="App">
      <textarea className="text-area" value={text} onChange={(e)=>setText(e.target.value)} rows={10}
      />
      <button className="btn" onClick={handleClick}>Summarise</button>
      <button className='btn2' onClick={handleBtn}>Show</button>
    </div>
  );
}

export default App;
