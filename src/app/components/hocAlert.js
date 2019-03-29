import React from 'react';
import { Link } from 'react-router-dom'

// context for alert state
import { AlertContext } from '../config/context';

// controls displaying of alerts and alert context provider
const withAlert = (ComposedComponent) => { 
  return class Alert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        alert: false,
        updateAlert: (alert) => { this.setState({ alert: alert }) }
      };
    }
    
    _createAlert() {
      if (!this.state.alert) {
        return null; // if no alert return nothing
      }
      return (
        <div className={"alert alert-dismissible alert-" + this.state.alert.type} role="alert">
          <button type="button" className="close" aria-label="Close" onClick={this.state.updateAlert.bind(this, false)}><span aria-hidden="true">&times;</span></button>
          {this.state.alert.message}
        </div>
      )
    }
    
    render() { 
       return (
         <AlertContext.Provider value={{ alert: this.state.alert, updateAlert: this.state.updateAlert }}>
           <ComposedComponent alert={this._createAlert()} {...this.props} />
         </AlertContext.Provider>
       );
    }

  } 
}

export default withAlert;