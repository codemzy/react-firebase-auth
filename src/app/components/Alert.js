import React from 'react';

function Alert(props) {
  if (props.alert) {
  return (
    <div className={"alert alert-dismissible alert-" + props.alert.type} role="alert">
      <button type="button" className="close" aria-label="Close" onClick={props.updateAlert.bind(this, false)}><span aria-hidden="true">&times;</span></button>
      {props.alert.message}
    </div>
  );
  } else {
    return null; // if no alert return nothing
  }
}

export default Alert;