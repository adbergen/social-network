import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login";
import PrivateRoute from "./components/private-route/PrivateRoute.jsx";
import Profile from "./components/Profile.jsx";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

// const items = [
//   { name: "home", label: "Home" },
//   { name: "billing", label: "Billing" },
//   { name: "settings", label: "Settings" },
// ];

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        {/* <Sidebar items={items} /> */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}
