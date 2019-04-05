import React from 'react';
import { Redirect } from 'react-router-dom';
import { appPath } from '../../config/settings';

// context
import { UserConsumer } from '../../context/User';

// checks if user is authorised to view the component
const withAuthorisation = (ComposedComponent, authRequired, roleRequired) => { 
  function Authorisation(props) {
    return (
      <UserConsumer>
        {function(context) {
          if (authRequired && !context.user) { // must be logged in to view
            return <Redirect to={appPath + "/login"} />;
          } else if (!authRequired && context.user) { // must be logged out to view
            return <Redirect to={appPath + "/"} />;
          } else { // authorisation granted
            return <ComposedComponent {...props} />;
          }
        }}
      </UserConsumer>
    );
  }
  return Authorisation;
}

export default withAuthorisation;