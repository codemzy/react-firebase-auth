import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// route paths
import * as paths from '../router/paths';


function Nav(props) {
  
  // state hook
  const [show, setShow] = useState(false);
  
  const handleDropdown = function(e) {
    e.preventDefault();
    setShow(!show); // toggle on and off
  }
  
  return (
    <div className="border-bottom bg-white mb-3">
      <div className="container">
        <nav className="navbar navbar-expand navbar-light p-0 py-3">
            <div className="d-flex flex-column flex-md-row align-items-center w-100">
                <Link to={paths.home} className="navbar-brand my-0 mr-md-3 font-weight-bold">My App</Link>
                <div className="navbar-nav my-2 my-md-0 mr-md-auto font-weight-bold">
                    <Link to={paths.page + "/1"} className="nav-item nav-link">Page1</Link>
                    <Link to={paths.page + "/2"} className="nav-item nav-link">Page2</Link>
                </div>
                <div className="navbar-nav my-2 my-md-0 font-weight-bold">
                  <li className={"nav-item dropdown" + (show ? " show" : "") }>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={handleDropdown} data-toggle="dropdown" aria-haspopup="true" aria-expanded={show ? "true" : "false"}>Account</a>
                    <div className={"dropdown-menu dropdown-menu-right" + (show ? " show" : "") } aria-labelledby="navbarDropdown">
                      <Link to={paths.account}  className="dropdown-item">Settings</Link>
                      <div className="dropdown-divider"></div>
                      <Link to={paths.logOut}  className="dropdown-item">Log Out</Link>
                    </div>
                  </li>
                </div>
            </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;


// <Link to={paths.account}  className="nav-item nav-link">Account</Link>