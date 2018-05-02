import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { fetchRoundResults } from './actions'
import { reducer } from './reducers'
import { App } from './containers'
import './index.css';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(fetchRoundResults())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)