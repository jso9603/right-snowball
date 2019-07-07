import React, {Component} from 'react';
import SnowIcon from '@material-ui/icons/AcUnitOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {withRouter} from 'react-router';
import './Snow.css';

// JSON
import {snows} from '../Data/mockData';

const result = snows;

class Snow extends Component {

  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  close() {
    this.props.history.push('/Detail/1');
  }

  cancelSnow = (index) =>{
    // console.log(result.snows[index]);
  };

  render() {
    return (
        <div className="snow-container">
          <span className="snow-title">눈덩이 모음</span>
          {
            result.snows.map((value, index) => {
              return (
                  <div key={index} >
                    <div className="alters">
                      <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                        <img className="alter-product" src={value.img_src}/>
                      </div>
                      <div style={{flex: 1}}>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                          <p className="p-title">{value.title}</p>
                          {
                            (value.sale_price !== '')
                                ? <p className="price">
                                  <span className="sale-price">{value.sale_price}원  </span>
                                  <span className="origin-price">{value.origin_price}원</span>
                                </p>
                                : <p className="sale-price">{value.origin_price}원</p>
                          }
                          <p className="snow-content"> <SnowIcon /> {value.snow_cnt}명이 눈덩이를 굴렸어요!</p>
                        </div>
                        <div className="button-container">
                          <button className="snow-button" onClick={() => this.cancelSnow(index)}><SnowIcon /></button>
                          <button className="shopping-button"><ShoppingCartIcon /></button>
                        </div>
                      </div>
                    </div>
                    {
                      (index !== result.snows.length - 1) &&
                      <hr/>
                    }
                  </div>
              )
            })
          }
        </div>
    )
  }
}

export default withRouter(Snow);