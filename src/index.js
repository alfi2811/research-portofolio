import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// REDUX
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import Main from './base/Main';

// STYLES
import 'antd/dist/antd.css';
import './assets/scss/index.scss';

// SET REDUX STORE
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

// SET DEFAULT AXIOS
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
