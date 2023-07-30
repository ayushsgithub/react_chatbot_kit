// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGot = () => {
    const botMessage = createChatBotMessage('Enter Your Name',);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleName = () => {
    const botMessage = createChatBotMessage('Enter your Age');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleFinal = () => {
    const botMessage = createChatBotMessage("",{
      delay: 3000,
      widget: "final",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNumber = () => {
    const botMessage = createChatBotMessage('Thank You, In 5 seconds, bot will exit',);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    handleFinal()
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleName,
            handleNumber,
            handleGot,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;