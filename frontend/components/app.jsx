import React from "react";
import { Link, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import AuthHeader from "./auth_header/auth_header_container";
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import UploadFormContainer from './upload_form/upload_form_container';
import ShowPhotoContainer from './show_photo/show_photo_container';
import Splash from './splash/splash'

const App = () => (
    <>
        <UploadFormContainer />
        <header className="header">
          <Link to="/"><h1>32em</h1></Link>
          <AuthHeader/>
        </header>
      <main>
        <Route exact path="/" component={Splash} />
        <Route path="/photos/:photoId" component={ShowPhotoContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </main>
    </>
  );
  
  export default App;