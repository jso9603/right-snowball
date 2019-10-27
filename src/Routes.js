import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Setting from './pages/Setting/Setting';
import Product from './pages/Product/Product';
import Snow from "./pages/Snow/Snow";
import Member from "./pages/Member/Member";
import Result from "./pages/Result/Result";
import Search from "./pages/Search/Search";
import LabelHeader from './components/Navigation/LabelHeader';

class Routes extends Component {
  render() {
    return (
        <Router>
          <div>
            <LabelHeader />
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/Main"/>)}/>
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/Main" component={Main}/>
              <Route exact path="/Detail/:id" component={Detail}/>
              <Route exact path="/Setting" component={Setting}/>
              <Route exact path="/Product" component={Product} />
              <Route exact path="/Snow" component={Snow}/>
              <Route exact path="/Member" component={Member}/>
              <Route exact path="/Result" component={Result}/>
              <Route exact path="/Search" component={Search}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default Routes;