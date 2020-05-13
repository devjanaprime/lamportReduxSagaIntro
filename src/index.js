import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const reducerOne = ( state=0, action ) =>{
  // console.log( 'in reducerOne:', action );
  return state;
}

const reducerTwo = ( state='asdf', action ) =>{
  // console.log( 'in reducerTwo:', action );
  if( action.type === 'test' ){
    console.log( 'in reducer 2, received test action' );
    state = 'tester';
  }
  return state;
}

const storeInstance = createStore( 
  combineReducers( { reducerOne, reducerTwo } ), 
  applyMiddleware( logger ) 
);

ReactDOM.render(
  <Provider store={ storeInstance }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
