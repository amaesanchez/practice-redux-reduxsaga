import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./redux";
import { watcherSaga } from "./sagas";
import { configureStore } from "@reduxjs/toolkit";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = configureStore({ reducer: reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) });

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
