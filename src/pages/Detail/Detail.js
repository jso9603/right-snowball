import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Detail.css';
import { send } from 'q';

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  infinite: true,
  arrows: false,
  firstLike: false,
  secondLike: false,
  thirdLike: false,
  likeIdx: 0
};

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
      selectedItem: 1,
      cardData: [{
        recommend: true,
        title: '1',
        description: 'No.1',
        like: 13
      },{
        recommend: false,
        title: '2',
        description: 'No.2',
        like: 7
      },{
        recommend: false,
        title: '3',
        description: 'No.3',
        like: 2
      }],
      tags: ['갑질', '성차별', '강매', '식품', '대리점'],
      description: '2019년 OO기업은 대리점 상대 상품 강매 논란으로 이슈가 되었다.'
    }
  }

  handleClickDot(idx) {
    if (idx === this.state.selectedItem) return;

    this.setState({ selectedItem: idx });

    this.slider.slickGoTo(idx-1);
  }

  fullLike = (i) => {
    switch(i) {
      case 0: 
        this.setState({ firstLike: true, likeIdx: i + 1 });
        break;
      case 1:
        this.setState({ secondLike: true, likeIdx: i + 1 });
        break;
      case 2:
        this.setState({ thirdLike: true, likeIdx: i + 1 });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      showPopup,
      selectedItem,
      cardData,
      tags,
      description,
      firstLike,
      secondLike,
      thirdLike,
      likeIdx
    } = this.state;

    return (
      <div className="detail-page">
        <div className="slider-wrap">
          <Slider 
            ref={slider => (this.slider = slider)}
            initialSlide={selectedItem}
            afterChange={current=>this.handleClickDot(current)}
            {...settings}
          >
            {cardData.map((el, idx) => {
              return (
                <div key={idx} className="portfolio-card">
                  {el.title}
                  <span className="like" onClick={_ => this.fullLike(idx)}>
                    <span className="like-count">{el.like}</span>
                    {(firstLike || secondLike || thirdLike) && idx === likeIdx - 1 ? (
                      <FavoriteIcon style={{color: 'red'}} />
                    ) : (
                      <FavoriteBorder style={{color: 'red'}} />
                    )}
                  </span>
                </div>
              )
            })}
          </Slider>

          <ul className="slick-dots">
            {cardData.map((el, idx) => (
              <li key={idx} className={`${selectedItem === idx ? 'slick-active' : ''} `}>
                <button />
              </li>
            ))}
          </ul>
        </div>

        <div className="company-info">
          <div style={{width: '100%', marginTop: '25px'}}>
            <h5 className="company-name">OO기업</h5>
            <div className="share"><ShareOutlinedIcon /></div>
          </div>
          <div>
            {tags.map((tag, idx) => (
              <span key={idx} className="company-tag">#{tag}&nbsp;</span>
            ))}
          </div>
          <p className="company-description">{description}</p>

          <button className="btn-product-list">제품 리스트로 이동하기</button>
          <button className="btn-news">관련 기사 페이지로 이동</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Detail);