import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";

// route paths
import * as paths from './paths';

// hoc
import HeadHOC from '../components/hocHead';
import withAuthorisation from './hocAuthorisation';
import authActions from './authActions';

// components
import Login from '../components/login/Login';
import Forgot from '../components/login/Forgot';
import Actions from '../components/login/Actions';
import Reset from '../components/login/Reset';
import Register from '../components/login/Register';
import Dashboard from '../components/account/Dashboard';
import Account from '../components/account/Account';
import Logout from '../components/account/Logout';
import Page from '../components/feature/Page';


//router
const routes = (
  <Router>
    <div>
      <Route exact path={paths.home} component={withAuthorisation(Dashboard, true)} />
      <Route exact path={paths.account} component={withAuthorisation(Account, true)} />
      <Route path={paths.page + "/:num"} render={({ props, match }) => withAuthorisation(Page, true)({...props, title: "Page " + match.params.num})}/>
      <Route path={paths.logOut} component={withAuthorisation(Logout, true)} />
      <Route exact path={paths.logIn} component={withAuthorisation(Login, false)} />
      <Route path={paths.forgotPw} component={withAuthorisation(Forgot, false)} />
      <Route path={paths.resetPw + "/:code"} component={withAuthorisation(Reset, false)} />
      <Route path={paths.register} component={withAuthorisation(Register, false)} />
      <Route path={paths.auth} component={Actions} />
    </div>
  </Router>
);

export default routes;