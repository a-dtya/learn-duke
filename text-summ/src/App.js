
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';

function App() {
  const [text,setText]  = useState("")
  const handleClick = async()=>{
    const response = await axios.get("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {inputs:text},
    {
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_URL}`
      }
    }
    )
    console.log(response.data)
  }
  return (
    <div className="App">
      <textarea className="text-area" value={text} onChange={(e)=>setText(e.target.value)} rows={10}
      />
      <button className="btn" onClick={handleClick}>Summarise</button>
    </div>
  );
}

export default App;
