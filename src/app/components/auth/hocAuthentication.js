import React from 'react';
import { checkAuth } from '../../api/auth';

// context for user state
import { UserContext } from '../../config/context';

// components
import Main from '../login/Main';

// checks with api if user is logged in and gets user data
const withAuthentication = (ComposedComponent) => { 
  return class Authentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        user: false,
        updateUser: (user) => { this.setState({ user: user }) }
      };
    }
    
    componentDidMount() { 
      // checks auth on load and listens for changes e.g. register, log in, log out etc
      this.listener = checkAuth(function(user) {
        this.setState({user: user ? user : false, loading: false});
      }.bind(this));
    } 
    
    componentWillUnmount() {
      this.listener();
    }
    
    render() { 
       if(this.state.loading) {
           return <Main loading={true} />;
       } else {
         return (
           <UserContext.Provider value={{ user: this.state.user, updateUser: this.state.updateUser }}>
             <ComposedComponent {...this.props} />
           </UserContext.Provider>
         );
       }
    }

  } 
}

export default withAuthentication;