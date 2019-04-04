import React from 'react';

// -------------- CONTEXT -------------- //

// user context
export const UserContext = React.createContext({
  user: false,
  updateUser: () => {},
});

// alert context
export const AlertContext = React.createContext({
  alert: false,
  updateAlert: () => {}
});

// -------------- CONTEXT FUNCTIONS -------------- //

// hoc for adding a context to a component as a consumer
export const hocContextConsumer = function(ComposedComponent, ContextConsumer, name) {
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

// function to add multiple contexts as props
export const withContext = function(Component, contexts = {}) {
  if (contexts.alert) {
    Component = hocContextConsumer(Component, AlertContext.Consumer, "alertContext");
  }
  if (contexts.user) {
    Component = hocContextConsumer(Component, UserContext.Consumer, "userContext");
  }
  return Component;
}