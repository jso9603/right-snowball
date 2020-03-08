import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Category from './pages/Category/Category';
import Detail from './pages/Detail/Detail';
import Setting from './pages/Setting/Setting';
import Product from './pages/Product/Product';
import Snow from './pages/Snow/Snow';
import AboutUs from './pages/AboutUs/AboutUs';
import Result from './pages/Result/Result';
import Search from './pages/Search/Search';
import GenericNotFound from './pages/NotFound/NotFound';
import LabelHeader from './components/Layout/LabelHeader';
import LabelFooter from './components/Layout/LabelFooter';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            minHeight: '100%',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateColumns: '100%',
          }}>
          <LabelHeader />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/Main" />} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/Category/:title" component={Category} />
            <Route exact path="/Detail/:id" component={Detail} />
            <Route exact path="/Setting" component={Setting} />
            <Route exact path="/Product" component={Product} />
            <Route exact path="/Snow" component={Snow} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Result/:search" component={Result} />
            <Route exact path="/Search" component={Search} />
            <Route path="/404" component={GenericNotFound} />
            <Redirect to="/404" />
          </Switch>
          <LabelFooter />
        </div>
      </Router>
    );
  }
}

export default Routes;
