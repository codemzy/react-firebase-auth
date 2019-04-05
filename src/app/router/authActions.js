import React from 'react';
import { Redirect } from 'react-router-dom';

// route paths
import * as paths from './paths';

function authActions() {
  
  let mode = window.location.search.match(/(?<=mode=).+?(?=&|$)/)[0];
  let code = window.location.search.match(/(?<=oobCode=).+?(?=&|$)/)[0];
  
  console.log(mode);
  
  if (mode === "resetPassword") {
    return <Redirect to={paths.resetPw + "/" + code } />; // to reset password
  } else {
    return <Redirect to={paths.home} />; // always return something so if no match then go home
  }
}

export default authActions;