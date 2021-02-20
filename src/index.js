import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import './bootstrap.min.css';
import './index.css';
import App from './App';
import { store } from './redux/store';


const renderer = () => (
  <Provider store={store}>
      <App/>
  </Provider>
)

ReactDom.render(renderer(), document.getElementById("root"));
