Combine/Logger
===

- npm install redux-logger
- update imports:

```import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';```

- create reducers (named "reducerOne" & "reducerTwo" in example)
- update storeInstance:

```const storeInstance = createStore( 
  combineReducers( { reducerOne, reducerTwo } ), 
  applyMiddleware( logger ) 
);```

- access reducers in components as: ```this.props.reduxState.reducerTwo```
- can remove console.log statements in the reducers. logger will display in console the state of redux pre and post receiving an action as well as paylod

React Saga
===

- npm install redux-saga
- 

lecture 2:
---

- import createSagaMiddleware from 'react-redux';
- const sagaMiddleware = createSagaMiddleware( watcherSaga );
- add sagaMiddleware to applyMiddleware
- sagaMiddleware.run( watcherSaga ); // do this after applyMiddleware
