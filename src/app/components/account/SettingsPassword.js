import React from 'react';

// context
import { getContext } from '../../context';

// validate
import { isRequired, checkPassword, checkMatch, checkNoMatch } from '../../utils/validate';

// api calls
import { changePassword } from '../../api/auth';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      password: '',
      newPassword: '',
      confirm: '',
      errors: {}
    };
  }

  _handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  
  _handleReset() {
    this.setState({ newPassword: "", confirm: "", password: "", errors: {} });
  }

  _handleValidate(event) {
    event.preventDefault();
    if (!this.state.loading) { // only if not already waiting for a response
      // validate data
      const ERRORS = { ...this.state.errors,
                      password: isRequired(this.state.password, "You need to enter your current password"),
                      newPassword: checkPassword(this.state.newPassword) || checkNoMatch(this.state.newPassword, this.props.userContext.user.email, "Your password can't be your email address"),
                      confirm: checkMatch(this.state.confirm, this.state.newPassword, "Your password confirmation does not match")
                     };
      this.setState({
          errors: ERRORS
      });
      // if no errors then handle the form
      if (!ERRORS.email && !ERRORS.password && !ERRORS.confirm) {
        this.setState({ loading: true });
        changePassword(this.props.userContext.user.email, this.state.password, this.state.newPassword).then((result) => {
          this._handleReset();
          this.props.alertContext.updateAlert({ type: "success", message: "Your password has been updated." });
        }).catch((error) => {
          this.props.alertContext.updateAlert({ type: "danger", message: error.message });
        }).finally(() => {
          this.setState({ loading: false });
        });
      }
    }
  }

  render() {
    return (
      <form onSubmit={this._handleValidate.bind(this)} className="mt-4 row">
        <div className="col-md-6">
          <h2>Password</h2>
          <div className="form-group">
            <label>New Password</label>
            <small className="form-text mt-n2 mb-2">You can enter a new password to change your password.</small>
            <input type="password" name="newPassword" className={"form-control" + (this.state.errors.newPassword ? " is-invalid" : "")} value={this.state.newPassword} onChange={this._handleChange.bind(this)} />
            { this.state.errors.newPassword ? <small className="invalid-feedback">{this.state.errors.newPassword}</small> : false }
          </div>
          { this.state.newPassword ?
            <span>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" name="confirm" className={"form-control" + (this.state.errors.confirm ? " is-invalid" : "")} value={this.state.confirm} onChange={this._handleChange.bind(this)} />
                { this.state.errors.confirm ? <small className="invalid-feedback">{this.state.errors.confirm}</small> : false }
              </div>
              <div className="form-group">
                <label>Old Password</label>
                <small className="form-text mt-n2 mb-2">Please enter your password and click 'Change Password' to confirm changes.</small>
                <input type="password" name="password" className={"form-control" + (this.state.errors.password ? " is-invalid" : "")} value={this.state.password} onChange={this._handleChange.bind(this)} />
                { this.state.errors.password ? <small className="invalid-feedback mb-n4">{this.state.errors.password}</small> : false }
              </div>
            </span>
              : false }
          </div>
        { this.state.newPassword ?
          <div className="col-md-6 align-self-end">
            <div className="form-group pt-3">
              { this.state.loading ? <button type="button" className="btn btn-dark" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Changing Password</button> :
              <span><button type="button" onClick={this._handleReset.bind(this)} className="btn btn-outline-danger">Cancel</button> <button type="submit" className="btn btn-dark">Change Password</button></span> }
            </div>
          </div>
          : false }
      </form>
    );
  }
}

export default getContext({ 
  user: true,
  alert: true
})(Password);