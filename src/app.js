import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Dashboard from "./container/dashboard";
import SessionPage from './container/SessionPage';
import Home from './container/Home';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/validatesession" component={SessionPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default App;
