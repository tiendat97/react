import React from 'react';
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/todos'

var store = createStore(todos);

render(
    <Provider store = { store }>
    <App />
    </Provider>,
     document.getElementById("root"));