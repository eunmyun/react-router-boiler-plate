import React from "react";
import { Route, IndexRoute } from "react-router";

import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";

const Routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={SignUp} />
    <Route path="/about" component={SignIn} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default Routes;
