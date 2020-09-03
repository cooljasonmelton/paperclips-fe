import React from 'react';
import ReactDOM from 'react-dom';

// reduxjs
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'

// styling
import './index.css';

// components
import App from './App';

// serviceWorker
import * as serviceWorker from './serviceWorker';

// redux store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
