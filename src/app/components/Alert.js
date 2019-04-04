import React from 'react';

// context
import {connectConsumers} from '../context';

// alert component
function Alert(props) {
  if (props.alertContext.alert) {
  return (
    <div className={"alert alert-dismissible alert-" + props.alertContext.alert.type} role="alert">
      <button type="button" className="close" aria-label="Close" onClick={props.alertContext.updateAlert.bind(this, false)}><span aria-hidden="true">&times;</span></button>
      {props.alertContext.alert.message}
    </div>
  );
  } else {
    return null; // if no alert return nothing
  }
}

// connect to context
const ConnectedAlert = connectConsumers(Alert, {alert});

export default ConnectedAlert;