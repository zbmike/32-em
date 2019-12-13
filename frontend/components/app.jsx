import React from "react";
import { Link, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import AuthHeader from "./auth_header/auth_header_container";
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import UploadFormContainer from './upload_form/upload_form_container';

const App = () => (
    <div>
      <UploadFormContainer />
      <header className="header">
        <Link to="/"><h1>32em</h1></Link>
        <AuthHeader/>
      </header>
      <main className="body">
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </main>
      <footer className="footer">
      <div className="cr-logo">&copy; 32em</div>
      <div className="footer-links">
        <ul>
          <li><Link to="/">Terms</Link></li>
          <li><Link to="/">Privacy</Link></li>
          <li><Link to="/">Support</Link></li>
        </ul>
      </div>
      </footer>
    </div>
  );
  
  export default App;