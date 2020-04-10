import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { store } from './store/reducers'

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
  <App />

  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
