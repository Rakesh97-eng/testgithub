import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Login from "./login";
import { Provider } from "react-redux";
import { userStore } from "./redux/store/store";
import ThemecontextProvider from "./context/themecontext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <ThemecontextProvider>
    <Provider store={userStore}>
      <App />
    </Provider>
  </ThemecontextProvider>
  </>
);

//React create  Single page web application ===>
// Virtual dom ==>Dom ==>it is an copy of original dom
