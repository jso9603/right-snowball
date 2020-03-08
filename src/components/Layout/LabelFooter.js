/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './LabelFooter.css';

class LabelFooter extends Component {
  aboutus = () => {
    this.props.history.push('/AboutUs');
  };

  render() {
    return (
      <div className="footer-container">
        <span>팀 빅걸스 💪😎</span>
        <div>
          <span className="footer-link" onClick={this.aboutus}>
            About us
          </span>
          <a className="footer-link" href="mailto:verybiggirls@gmail.com">
            Contact
          </a>
          <span className="footer-link">Version 1.3.0</span>
        </div>
      </div>
    );
  }
}

export default withRouter(LabelFooter);
