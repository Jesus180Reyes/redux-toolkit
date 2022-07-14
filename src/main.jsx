import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ImageApp } from './ImageApp';
import './index.css';
import { store } from './store/store';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <TodoApp />
    </Provider>
  </React.StrictMode>
)
