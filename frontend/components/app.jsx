import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import AuthHeader from "./auth_header/auth_header_container";
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';

const App = () => (
    <div>
      <header>
        <h1>32em</h1>
        <AuthHeader/>
      </header>

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      
    </div>
  );
  
  export default App;