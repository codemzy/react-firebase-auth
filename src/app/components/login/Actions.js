import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as paths from '../../router/paths';

// context
import { getContext } from '../../context';

// api calls
import { restoreEmail } from '../../api/auth';

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
          props.alertContext.updateAlert({ type: "success", message: "We have restored your " + email + " email address." });
        }).catch(function(error) {
          props.alertContext.updateAlert({ type: "danger", message: "There was a problem with your recovery code." });
        }).finally(() => {
          return props.history.push(paths.home);
        });
      } else if (mode === "verifyEmail") {
        console.log("need to handle this");
      } else {
        return props.history.push(paths.home); // if no match then go home
      }
    }
  }, []); // empty array tells useEffect to only run once on mount
  
  return <Main loading={true} />;
}

export default getContext({
  alert: true
})(Actions);
