import React from 'react';
import ReactDOM from 'react-dom';

// app routes
import routes from './config/router';

// hoc user authentication
import withAuthentication from './components/auth/hocAuthentication';

// App
const App = withAuthentication(function App() {
 return routes; 
});

// render App
ReactDOM.render(<App />, document.getElementById('app'));