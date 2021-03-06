import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles/styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import reducer from './reducers';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("react-app-root")
);
