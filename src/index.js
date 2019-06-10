import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import rootReducer from './reducers/index'

const enhancers = [applyMiddleware(thunk)]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, undefined, composedEnhancers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
)
