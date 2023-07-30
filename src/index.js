import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import store from './store';
// import Page1 from './components/Page1';
// import Page3 from './components/Page3';

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Page1} />
//         <Route path="/page3" component={Page3} />
//       </Switch>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );
