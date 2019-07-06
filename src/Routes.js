import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import First from './pages/First/First';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Setting from './pages/Setting/Setting';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/Setting" component={Setting} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;