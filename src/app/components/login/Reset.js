import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// hoc
import withHead from '../hocHead';

// context
import { withContext } from '../../config/context';

//components
import Main from './Main';
import UserForm from './User_Form';

function Reset(props) {
  
  // state hook
  const [loading, setLoading] = useState(false);
  
  // submit the form
  const handleSubmit = function(form) {
    setLoading(true);
    setTimeout(function() { 
      setLoading(false);
      props.alertContext.updateAlert({ type: "danger", message: "Testing an error" });
    }, 1000);
  }
  
  return (
    <Main title="Reset your password" footer={<small><p className="text-white">Remembered your password? <Link to={appPath + "/login"} className="text-white"><u>Log in</u></Link></p></small>}>
      <h6 className="text-muted">Nearly done! Please enter your email address and a new password.</h6>
      <UserForm 
        loading={loading} 
        handleSubmit={handleSubmit}
        email={true} password={{title: "New Password"}} confirm={{title: "Confirm New Password"}} 
        button={{submit: "Reset Password", submitted: "Setting Password"}} />
    </Main>
  );
}

export default withHead(
  withContext(Reset, {alert}), 
  "Reset Password"
);