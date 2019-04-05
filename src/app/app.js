import React from 'react';
import ReactDOM from 'react-dom';

// app routes
import routes from './config/router';

// context providers
import { AlertProvider } from './context/Alert';
import { UserProvider } from './context/User';

// App
const App = () => (
  <UserProvider>
    <AlertProvider>
      {routes}
    </AlertProvider>
  </UserProvider>
);

// render App
ReactDOM.render(<App />, document.getElementById('app'));