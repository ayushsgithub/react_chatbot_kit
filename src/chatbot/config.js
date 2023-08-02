// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../chatbot/DogPicture'
import Final from './Final.jsx';
import Overview from '../widgets/overview';
import CustomMessage from './customMesage';
import Age from './age'

const botName = "HappilyEver";

const config = {
  // initialMessages: [createChatBotMessage(`Hi, I'm ${botName}`)],
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,
  {
    withAvatar: true,
    delay: 400,
    widget: "overview"
  }),
  // createCustomMessage('Test', 'final'),
],
  botName: botName,
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
    age: (props) => <Age {...props} />,
    final: (props) => <Final {...props} />,
  },
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
      widgetFunc: (props) => <Final {...props} />,
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