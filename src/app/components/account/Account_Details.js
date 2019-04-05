import React from 'react';

// context
import { getContext } from '../../context';

class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ''
    };
  }

  _handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    // removed 'disabled' from fieldset below to build out form when wired up to backend
    // e.g. change name, change password features
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)} className="row pt-4">
        <div className="form-group col-md-6">
          <label>First Name</label>
          <input type="text" name="firstName" className="form-control" placeholder={this.props.userContext.user.firstName} value={this.state.firstName} onChange={this._handleChange.bind(this)} />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name</label>
          <input type="text" name="lastName" className="form-control" placeholder={this.props.userContext.user.lastName} value={this.state.lastName} onChange={this._handleChange.bind(this)} />
        </div>
        <div className="form-group col-md-6">
          <label>Email</label>
          <input type="email" name="email" className="form-control" placeholder={this.props.userContext.user.email} value={this.state.email} onChange={this._handleChange.bind(this)} />
        </div>
      </form>
    );
  }
}

export default getContext({ 
  user: true 
})(AccountDetails);