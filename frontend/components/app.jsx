import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import AuthHeader from "./auth_header/auth_header_container";
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import UploadFormContainer from './upload_form/upload_form_container';
import ShowPhotoContainer from './show_photo/show_photo_container';
import UserProfileContainer from './user_profile/user_profile_container';
import Splash from './splash/splash_container';
import Homefeed from './homefeed/homefeed_container';
import LoadingAnimation from './loading';

const App = () => (
    <>
        <LoadingAnimation />
        <UploadFormContainer />
        <header className="header">
          <Link to="/"><h1>32em</h1></Link>
          <AuthHeader />
        </header>
      <main>
        <Switch>
          <AuthRoute exact path="/" component={Splash} />
          <ProtectedRoute exact path="/homefeed" component={Homefeed} />
          <Route path="/photos/:photoId" component={ShowPhotoContainer} />
          <Route path="/users/:userId" component={UserProfileContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
      </main>
    </>
  );
  
  export default App;