import React, {Component} from 'react';
import Slider from "react-slick";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ChatOutlined from '@material-ui/icons/ChatOutlined';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import './Main.css';

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const renderCategoryIcon = (code) => {
  switch (code) {
    case 'a':
      return <ChatOutlined style={{color: 'black', fontSize: 30}} />
    case 'b':
      return <LocalPharmacyOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'c':
      return <PublicOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'd':
      return <WcOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'e':
      return <ThumbsUpDownOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'f':
      return <PetsOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'g':
      return <BubbleChartOutlinedIcon style={{color: 'black', fontSize: 30}} />
    default:
      console.log('There is no Icon for this code');
  }  
}

class Main extends Component {
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
      description: '2019년 OO기업은 대리점 상대 상품 강매 논란으로 이슈가 되었다.',
      categories: [
        {
          code: 'a',
          title: '갑질/언행',
        },
        {
          code: 'b',
          title: '마약',
        },
        {
          code: 'c',
          title: '환경오염',
        },
        {
          code: 'd',
          title: '성차별/성범죄',
        },
        {
          code: 'e',
          title: '채용/노동',
        },
        {
          code: 'f',
          title: '동물',
        },
        {
          code: 'g',
          title: '기타',
        },
      ],
    }
  }

  handleClickDot(idx) {
    if (idx === this.state.selectedItem) return;

    this.setState({ selectedItem: idx });

    this.slider.slickGoTo(idx-1);
  }

  goDetail = () => {
    this.props.history.push('/Detail/1');
  };

  render() {
    const {
      selectedItem,
      cardData,
      categories,
    } = this.state;

    return (
        <div className="main">
          <div className="hot-issue-container">
            <div className="hot-issue-title">지금 가장 뜨거운 눈덩이</div>
          </div>
          <div style={{borderWidth: 1, padding: 10}}>
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
                    <span className="like">
                      <span className="like-count">{el.like}</span>
                      <FavoriteBorder style={{color: 'red'}} />
                    </span>
                  </div>
              )})}
            </Slider>
          </div>
          <div className="category-container">
            <div className="category-info">
              <div className="category-info-box" style={{backgroundColor: '#23a7ee'}}>
                <div className="content"  style={{color: 'white'}}>이슈별<br />키워드</div>
              </div>
            </div>
            {categories.map((item, index) => {
              return(
                <div className="category-info" key={index}>
                  <div className="category-info-box">
                    <div className="content">
                      {renderCategoryIcon(item.code)}
                      <span style={{marginTop: 10}}>{item.title}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    )
  }
}

export default Main;