import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Full from './Full'
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'
import './App.css'
const sagaMiddleware = createSagaMiddleware()
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(rootReducer, enhancers)
sagaMiddleware.run(rootSaga)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Full />
      </Provider>
    )
  }
}
