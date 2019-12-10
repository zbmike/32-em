import React from "react";
import { Route } from "react-router-dom";
import AuthRoute from "../util/route_util";

import AuthHeader from "./auth/auth_header_container";

const App = () => (
    <div>
      <header>
        <h1>32em</h1>
        <AuthHeader/>
      </header>

      
    </div>
  );
  
  export default App;