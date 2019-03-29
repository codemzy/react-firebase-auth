import React from 'react';

// user context
export const UserContext = React.createContext({
  user: false,
  updateUser: () => {},
});

// firebase context
// export const FirebaseContext = React.createContext(null);

// alert context
export const AlertContext = React.createContext({
  alert: false,
  updateAlert: () => {}
});

// context as props hoc for alert
export const withAlertContext = function(ComposedComponent, title) {
  return function (props) {
    return (
      <AlertContext.Consumer>
        {context => (
          <ComposedComponent alertContext={context} {...props} />
        )}
      </AlertContext.Consumer>
    );
  }
}

