import React from 'react';

// user context
export const UserContext = React.createContext({
  user: false,
  updateUser: () => {},
});

// firebase context
// export const FirebaseContext = React.createContext(null);

// alert context
export const AlertContext = React.createContext({
  alert: false,
  updateAlert: () => {},
  type: 'primary',
  message: '<p>A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</p>',
});
