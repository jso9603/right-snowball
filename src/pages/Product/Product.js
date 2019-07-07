import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CloseIcon from '@material-ui/icons/Close'
import './Product.css';

// JSON
import { mock } from '../Data/mockData';
const result = mock;

class Product extends Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  close() {
    this.props.history.push('/Detail/1');
  }

  render() {
    return (
      <div className="popup-page">
      <div className="top">
        <h5>옥씨싹싹</h5>
        <button className="close" onClick={this.close}>
          <CloseIcon style={{width: '39px', height: '39px' }} />
        </button>
      </div>

      <div className="product">
        <div style={{textAlign: 'center'}}>
        <img
          className="product-img"
          src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E"
        >
        </img>
        </div>
        
        <div className="alterss">
          <hr/>
          {/* for loop */}
          <div style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '30px'}}>
            <img className="alter-product" src={require('./1.jpg')}></img>
          </div>
          <div style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '20px'}}>
            <p className="p-title">산소가득표백</p>
            <p className="price">16,400원</p>
          </div>
        </div>
        <div className="alterss">
          <hr/>
          {/* for loop */}
          <div style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '30px'}}>
            <img className="alter-product" src={require('./2.jpg')}></img>
          </div>
          <div style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '20px'}}>
            <p className="p-title">비트살균표백제</p>
            <p className="price">21,500원</p>
          </div>
        </div>
        <div className="alterss" style={{marginBottom: '70px'}}>
          <hr/>
          {/* for loop */}
          <div style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '30px'}}>
            <img className="alter-product" src={require('./3.jpg')}></img>
          </div>
          <div style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '20px'}}>
            <p className="p-title">산소크린</p>
            <p className="price">8,300원</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(Product);