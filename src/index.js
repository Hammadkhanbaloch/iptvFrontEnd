// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/Redux/Store";
import App from "./App";
import './pages/Sign Up/style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
