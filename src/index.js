import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
//import thunk from "redux-thunk";

import App from "./App";
import * as models from "./models";
import "./styles.css";

// generate Redux store
const store = init({
  models
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
