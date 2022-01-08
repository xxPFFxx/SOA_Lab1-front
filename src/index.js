import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store/store";
export const DEFAULT_URL = "https://localhost:51510";
export const DEFAULT_URL_SECOND_SERVICE = "https://localhost:8585/heroes";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
