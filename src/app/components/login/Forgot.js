import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// hoc
import withHead from '../hocHead';

// context
import { getContext } from '../../context';

// api calls
import { forgotPassword } from '../../api/auth';

//components
import Main from './Main';
import Form from './Form';

function Forgot(props) {
  
  // state hook
  const [loading, setLoading] = useState(false);
  
  // submit the form
  const handleSubmit = function(form) {
    setLoading(true);
    forgotPassword(form.email).then((result) => {
      props.alertContext.updateAlert({ type: "success", message: "We have emailed instructions to your email address, please check your email." });
    }).catch((error) => {
      props.alertContext.updateAlert({ type: "danger", message: "An error occurred when trying to reset your password. Please check your email address and try again." });
    }).finally(() => {
      setLoading(false);
    });
  }
  
  return (
    <Main title="Forgot password" footer={<small><p className="text-white">Remembered your password? <Link to={appPath + "/login"} className="text-white"><u>Log in</u></Link></p></small>}>
      <h6 className="text-muted">Please submit your email address. You'll get sent a link to reset your password.</h6>
      <Form 
        loading={loading} 
        handleSubmit={handleSubmit}
        email={true} 
        button={{submit: "Get Reset Email", submitted: "Requesting"}} />
    </Main>
  );
}

export default getContext({
  alert
})(withHead(Forgot, "Forgotten Password"));