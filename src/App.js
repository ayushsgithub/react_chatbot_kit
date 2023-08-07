import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import "./App.css"
import config from "./chatbot/config";
import MessageParser from "./chatbot/messageParsers";
import ActionProvider from "./chatbot/actionProvider";
import { useSelector } from "react-redux";
import Final from "./chatbot/Final";


function App() {
  const page3 = useSelector((state) => state.counter.page3)

  const [enroll, setEnroll] = useState(false);

  function handleChange(){
    setEnroll(true)
  }
  return (

<>
    
    {enroll ? 
    
    (page3 ? <Final /> : <div className="App">
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  </div>)
    : 
    <div className="enroll">
      <h2 className="enroll-h2">Enter Into Student Info System</h2>
      <button className="enroll-button" onClick={handleChange}>Enroll Now!</button>
    </div>}

    </>


  );
}

export default App;
