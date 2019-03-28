import React from 'react';

// context for alert state
import { AlertContext } from '../config/context';

// controls displaying of alerts and alert context provider
const withAlert = (ComposedComponent) => { 
  return class Alert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        alert: {
          type: "danger",
          message: 'A simple primary alert with *an example link*. Give it a click if you like.',
          link: "#"
        },
        updateAlert: (alert) => { this.setState({ alert: alert }) }
      };
    }
    
    _createAlert() {
      return (
        <div className={"alert alert-" + this.state.alert.type} role="alert">
          A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
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