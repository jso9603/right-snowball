import React, {Component} from 'react';
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
import Product from './pages/Product/Product';
import LabelBottomNavigation from "./components/Navigation/LabelBottomNavigator";
import Snow from "./pages/Snow/Snow";
import Member from "./pages/Member/Member";

class Routes extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={First}/>
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/Main" component={Main}/>
              <Route exact path="/Detail/:id" component={Detail}/>
              <Route exact path="/Setting" component={Setting}/>
              <Route exact path="/Product" component={Product} />
              <Route exact path="/Snow" component={Snow}/>
              <Route exact path="/Member" component={Member}/>
            </Switch>
            <LabelBottomNavigation/>
          </div>
        </Router>
    )
  }
}

export default Routes;