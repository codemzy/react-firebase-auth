import React from 'react';
import ReactDOM from 'react-dom';

// app routes
import routes from './config/router';

// hoc user authentication
import withAuthentication from './components/auth/hocAuthentication';
// hoc alert context
import { AlertProvider } from './context/Alert';

// App
const App = withAuthentication(function App() {
 return routes; 
});

// Add Context
const AppContext = () => (
  <AlertProvider>
    <App />
  </AlertProvider>
);

// render App
ReactDOM.render(<AppContext />, document.getElementById('app'));