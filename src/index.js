import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoInput } from './components/todo-input/todo-input';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoInput />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
