
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
const config = require("./config.json")

function App() {
  const [text,setText]  = useState("")
  const [stext,setSText] = useState("")
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
    setSText(response.data[0]["summary_text"])
  }
  
  return (
    <div className="App">
      <h2 className='title'>Text Summariser</h2>
      <textarea className="text-area" value={text} onChange={(e)=>setText(e.target.value)} rows={10}
      />
      <button className="btn" onClick={handleClick}>Summarise</button>
      <div>
        <h3 className='summary-title'>Summary</h3>
        <div className='summary'>
          <p>
          {stext}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
