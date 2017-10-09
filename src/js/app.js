import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';

import TodoList from './TodoList';
import store from './TodoStore';

ReactDOM.render(<TodoList store={store} />, document.getElementById('root'));
