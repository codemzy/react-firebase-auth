import React from 'react';

// consumers
import { AlertConsumer } from './Alert';

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
export const connectConsumers = function(Component, contexts = {}) {
  if (contexts.alert) {
    Component = hocContextConsumer(Component, AlertConsumer, "alertContext");
  }
  if (contexts.user) {
    // Component = hocContextConsumer(Component, UserContext.Consumer, "userContext");
  }
  return Component;
}