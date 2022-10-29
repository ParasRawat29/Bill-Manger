import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </HashRouter>
  </React.StrictMode>
);
