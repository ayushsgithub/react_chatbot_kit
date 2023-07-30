// in config.js
import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import DogPicture from '../chatbot/DogPicture'
import Final from '../chatbot/final';
import Overview from '../widgets/overview';

const botName = "Ayush's Bot";


const config = {
  // initialMessages: [createChatBotMessage(`Hi, I'm ${botName}`)],
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,
  {
    withAvatar: true,
    delay: 400,
    widget: "overview"
  }),
  createCustomMessage('Test', 'custom'),
],
  botName: botName,
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    
    {
      widgetName: 'final',
      widgetFunc: (props) => <Final />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;