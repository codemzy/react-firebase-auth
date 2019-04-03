import React from 'react';
import { Link } from 'react-router-dom'
import { appPath } from '../../config/settings';

// hoc
import withHead from '../hocHead';

//components
import Main from './Main';
import UserForm from './User_Form';

function Reset(props) {
  return (
    <Main title="Reset your password" footer={<small><p className="text-white">Remembered your password? <Link to={appPath + "/login"} className="text-white"><u>Log in</u></Link></p></small>}>
      <h6 className="text-muted">Nearly done! Please enter your email address and a new password.</h6>
      <UserForm email={true} password={{title: "New Password"}} confirm={{title: "Confirm New Password"}} button={{submit: "Reset Password", submitted: "Setting Password"}} />
    </Main>
  );
}

export default withHead(Reset, "Reset Password");