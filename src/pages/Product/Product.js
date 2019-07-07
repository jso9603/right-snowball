import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Product.css';

// JSON
import { mock } from '../Data/mockData';
const result = mock;

class Product extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="popup-page">
      <div className="top">
        <h5>title</h5>
        <img className="close" src=""></img>
      </div>

      <div className="product">
        <img className="product-img" src=""></img>
        <div className="alters">
          {/* for loop */}
          <div style={{display: 'inline-block'}}>
            <img className="alter-product" src=""></img>
          </div>
          <div style={{display: 'inline-block'}}>
            <p className="p-title">핑퐁나라의 대체품</p>
            <p className="price">34,500원</p>
          </div>
        </div>
        <div className="alters">
          {/* for loop */}
          <div style={{display: 'inline-block'}}>
            <img className="alter-product" src=""></img>
          </div>
          <div style={{display: 'inline-block'}}>
            <p className="p-title">핑퐁나라의 대체품</p>
            <p className="price">34,500원</p>
          </div>
        </div>
        <div className="alters">
          {/* for loop */}
          <div style={{display: 'inline-block'}}>
            <img className="alter-product" src=""></img>
          </div>
          <div style={{display: 'inline-block'}}>
            <p className="p-title">핑퐁나라의 대체품</p>
            <p className="price">34,500원</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(Product);