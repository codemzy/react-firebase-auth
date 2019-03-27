import React from 'react';
import ReactDOM from 'react-dom';

// app routes
import routes from './config/router';

// hoc user authentication
import withAuthentication from './components/auth/hocAuthentication';

// firebase instance
import Firebase from './config/firebase';
import { FirebaseContext } from './config/context';

// App
const App = withAuthentication(function App() {
 return routes; 
});

// render App
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>, 
  document.getElementById('app'));