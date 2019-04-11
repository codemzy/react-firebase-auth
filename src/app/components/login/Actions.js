import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as paths from '../../router/paths';

// context
import { getContext } from '../../context';

// api calls
import { restoreEmail, verifyEmail } from '../../api/auth';

//components
import Main from './Main';

// handles auth actions from firebase
function Actions(props) {
  
  let mode = window.location.search.match(/(?<=mode=).+?(?=&|$)/)[0];
  let code = window.location.search.match(/(?<=oobCode=).+?(?=&|$)/)[0];
  
  useEffect(() => {
    if (mode && code) {
      if (mode === "resetPassword") {
        return props.history.push(paths.resetPw  + "/" + code);
      } else if (mode === "recoverEmail" ) {
        restoreEmail(code).then(function(email) {
          props.alertContext.updateAlert({ type: "success", message: "We have restored your " + email + " email address. Please log in." });
        }).catch(function(error) {
          props.alertContext.updateAlert({ type: "danger", message: "Sorry, there was a problem with your email recovery." });
        }).finally(() => {
          return props.history.push(paths.logOut);
        });
      } else if (mode === "verifyEmail") {
        verifyEmail(code).then(function(email) {
          props.alertContext.updateAlert({ type: "success", message: "Your email address has been verified!" });
        }).catch(function(error) {
          props.alertContext.updateAlert({ type: "danger", message: "Sorry, there was a problem. Please try to verify your email address again." });
        }).finally(() => {
          return props.history.push(paths.account);
        });
      } else {
        return props.history.push(paths.home); // if no match then go home
      }
    } else {
      return props.history.push(paths.home); // if no match then go home
    }
  }, []); // empty array tells useEffect to only run once on mount
  
  return <Main loading={true} />;
}

export default getContext({
  alert: true
})(Actions);
