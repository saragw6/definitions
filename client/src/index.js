// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
import 'babel-polyfill';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );



import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
