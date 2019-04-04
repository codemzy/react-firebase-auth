import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// hoc
import withHead from '../hocHead';

// context
import { getContext } from '../../context';

// api calls
import { userLogin } from '../../api/auth';

// components
import Main from './Main';
import Form from './Form';

// log in component - displays and handles log in form
function Login(props) {
  
  // state hook
  const [loading, setLoading] = useState(false);
  
  // submit the form
  const handleSubmit = function(form) {
    setLoading(true);
    userLogin(form.email, form.password).catch((error) => {
      setLoading(false);
      props.alertContext.updateAlert({ type: "danger", message: error.message });
    });
  }
  
  return (
    <Main title="Log In" footer={<small><p className="text-white">Don't have an account? <Link to={appPath + "/register"} className="text-white"><u>Register</u></Link></p></small>}>
      <h6 className="text-muted">Welcome back! Please enter your email address and password.</h6>
      <Form 
        loading={loading} 
        handleSubmit={handleSubmit}
        email={true} password={true} 
        button={{submit: "Log In", submitted: "Logging In"}} />
    </Main>
  );
}

export default getContext({
  alert
})(withHead(Login, "Log In"));