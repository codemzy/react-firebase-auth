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
export const withAlertContext = function(ComposedComponent, contexts = {}) {
  return function (props) {
    return (
      <AlertContext.Consumer>
        {alertContext => (
          <ComposedComponent alertContext={alertContext} {...props} />
        )}
      </AlertContext.Consumer>
    );
  }
}



export const withContext = function(Component, contexts = {}) {
  if (contexts.alert) {
    Component = withAlertContext(Component);
  }
  return Component;
}