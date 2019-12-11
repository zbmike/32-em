import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import AuthHeader from "./auth_header/auth_header_container";
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';

const App = () => (
    <div>
      <header className="header">
        <h1>32em</h1>
        <AuthHeader/>
      </header>
      <main className="body">
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </main>
    </div>
  );
  
  export default App;