import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import 'react-notifications/lib/notifications.css';
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
