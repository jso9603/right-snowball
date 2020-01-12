import React, { Component } from 'react';
import Routes from './Routes';
import { isMobileSize } from './utils/browser';
import NotMobile from './pages/Error/NotMobile';
import "App.css";

class App extends Component {
  render() {
    return ( isMobileSize() ? (
        <div style={{height: '100%'}}>
          <Routes />
        </div> 
      ) : (
        <NotMobile />
      )
    )
  }
}

export default App;