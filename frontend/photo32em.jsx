import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import {login, logout, signup} from "./actions/session_actions";
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, 
                  document.getElementById("root"));

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});