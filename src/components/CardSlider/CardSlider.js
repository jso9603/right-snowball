import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css';
// import FavoriteIcon from '@material-ui/icons/Favorite';

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  infinite: true,
  arrows: false,
  centerPadding: '20px'
};

let likeList = [false, false, false];

class CardSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: 0
    }
  }

  handleClickDot(idx) {
    if (idx === this.state.selectedItem) return;
  
    this.setState({ selectedItem: idx });
  
    this.slider.slickGoTo(idx-1);
  }
  
  fullLike = (i) => {
    likeList[i] = !likeList[i];
    this.forceUpdate();
  }

  render() {
    const { data } = this.props;
    const { selectedItem } = this.state;

    return (
      <div className="card-slider">
        <div className="slider-wrap">
          <Slider 
            ref={slider => (this.slider = slider)}
            initialSlide={selectedItem}
            afterChange={current=>this.handleClickDot(current)}
            {...settings}
          >
            {data.map((el, idx) => {
              return (
                <div key={idx} className="portfolio-card">
                  <img src={el} className="result-company-image" alt="company" />
                  {/* {el.title} */}
                  {/* <span className="like" onClick={_ => this.fullLike(idx)}> */}
                  <span className="like">
                    {/* <span className="like-count">{el.like}</span> */}
                    {/* {likeList[idx] ? ( */}
                    {/* <FavoriteIcon style={{color: 'red'}} /> */}
                    {/* ) : ( */}
                    <FavoriteBorder style={{color: 'red'}} />
                    {/* )} */}
                  </span>
                </div>
              )
            })}
          </Slider>

          <ul className="slick-dots">
            {data.map((el, idx) => (
              <li key={idx} className={`${selectedItem === idx ? 'slick-active' : ''} `}>
                <button />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(CardSlider);