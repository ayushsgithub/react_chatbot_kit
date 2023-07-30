// in MessageParser.js
import React from 'react';


const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    if (message.includes('got')) {
      actions.handleGot();
    }
    if (message.includes('dog')) {
      actions.handleDog();
    }
    if (message.toLowerCase().includes('gowtham')) {
      actions.handleName();
    }
    if (message.toLowerCase().includes("27")) {
      actions.handleNumber();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;