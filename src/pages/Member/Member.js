import React, { Component } from 'react';
import './Member.css';

class Member extends Component {
  render() {
    return (
        <div>
          <img src={require('./img-5989.png')} alt="camera_image" width="100%"/>
          <img src={require('./camera_menu.png')} alt="camera_menu" width="100%"/>
        </div>
    )
  }
}

export default Member;