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
export const hocContext = function(ComposedComponent, ContextConsumer, name) {
  return function (props) {
    return (
      <ContextConsumer>
        {context => {
          let newContext = { [name]: context };
          return <ComposedComponent {...newContext} {...props} />;
        }}
      </ContextConsumer>
    );
  }
}



export const withContext = function(Component, contexts = {}) {
  if (contexts.alert) {
    Component = hocContext(Component, AlertContext.Consumer, "alertContext");
  }
  return Component;
}