import React from "react";
import logo from "assets/img/logo/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "containers/pages/Login";
import Register from "containers/pages/Register";
import Dashboard from "containers/pages/Dashboard";
import { Provider } from "react-redux";
import { store } from "config/redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
