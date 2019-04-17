import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';
import Password from './Password';
import Email from './Email';

function Account(props) {
  return (
    <Main>
      <h1>Account Settings</h1>
      <p className="lead">This is your account page, you can verify and change your email address, and update your password.</p>
      <Email />
      <Password />
    </Main>
  );
}

export default withHead(Account, "My Account");