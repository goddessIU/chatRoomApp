import React, { useState } from 'react';
import  './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [allMessage, setAllMessage] = useState('');
  const ws = new WebSocket('ws://localhost:8001');
  ws.onopen = function() {
    ws.onmessage = function (event) {
      setAllMessage(allMessage + event.data);
    }
  }

  const inputWords = (e) => {
    setText(e.target.value);
  }
  const sendMessage = () => {
    ws.send(text);
    setAllMessage(allMessage + text);
  } 

  return (
    <div>
      <div>{allMessage}</div>
      <input onChange={inputWords}/>
      <button onClick={sendMessage}>click me</button>
    </div>
  )
}

export default App;
