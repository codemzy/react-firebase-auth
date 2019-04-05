import React from 'react';

// api calls
import { checkAuth } from '../api/auth';

// components
import Main from '../components/login/Main';

// user context
const UserContext = React.createContext({
  user: false,
  updateUser: () => {},
});

// user context provider
export const UserProvider = class UserProvider extends React.Component {
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
  
  render() { 
     if(this.state.loading) {
         return <Main loading={true} />;
     } else {
       return (
         <UserContext.Provider value={{ user: this.state.user, updateUser: this.state.updateUser }}>
           {this.props.children}
         </UserContext.Provider>
       );
     }
  }
  
};

// user context consumer
export const UserConsumer = UserContext.Consumer;