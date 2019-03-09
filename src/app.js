import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Dashboard from "./container/dashboard";
import SessionPage from './container/SessionPage';
import Home from './container/Home';
import PrintBet from './container/printBet';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='App' style={{ height: '97.5vh'}}>
        <Router>
          <Switch>
            {/* <Route path="/validatesession" component={SessionPage} /> */}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/home" component={Home} />
            <Route path="/session" component={SessionPage} />
            <Route path="/print" component={PrintBet}/>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
