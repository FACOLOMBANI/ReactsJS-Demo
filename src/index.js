import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-tippy/dist/tippy.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger'

import videoStore from "./reducers/videoReducer";

const loggerMiddleware = createLogger()

const store = createStore(
  videoStore,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
    ,loggerMiddleware // neat middleware that logs actions
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
