import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as paths from '../../router/paths';

// hoc
import withHead from '../hocHead';

// context
import { getContext } from '../../context';

// api calls
import { checkResetCode, resetPassword, userLogin } from '../../api/auth';

//components
import Main from './Main';
import Form from './Form';

function Reset(props) {
  
  // state hook
  const [loading, setLoading] = useState(false);
  
  // submit the form
  const handleSubmit = function(form) {
    setLoading(true);
    let code = props.match.params.code;
    checkResetCode(code).then(function(email) {
      return resetPassword(code, form.password).then(function(resp) {
        return userLogin(email, form.password);
      });
    }).catch((error) => {
      setLoading(false);
      props.alertContext.updateAlert({ type: "danger", message: error.message });
    });
  }
  
  return (
    <Main title="Reset your password" footer={<small><p className="text-white">Remembered your password? <Link to={paths.logIn} className="text-white"><u>Log in</u></Link></p></small>}>
      <h6 className="text-muted">Nearly done! Please enter your email address and a new password.</h6>
      <Form 
        loading={loading} 
        handleSubmit={handleSubmit}
        email={true} password={{title: "New Password"}} confirm={{title: "Confirm New Password"}} 
        button={{submit: "Reset Password", submitted: "Setting Password"}} />
    </Main>
  );
}

export default getContext({
  alert
})(withHead(Reset, "Reset Password"));