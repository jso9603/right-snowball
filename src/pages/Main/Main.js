import React, {Component} from 'react';
import Slider from "react-slick";
import AlterIcon from '@material-ui/icons/CompareArrows';
import SearchIcon from '@material-ui/icons/Search';
import {mock} from '../Data/mockData';
import './Main.css';
import VerticalText from "./VerticalText";

class Main extends Component {
  render() {
    console.log(mock);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

    return (
        <div className="main">
          <div className="header">
            <div className="search-container">
              <input type="text" className="search"/>
              <button><SearchIcon/></button>
            </div>
            <div>
              <span className="header-title">어떤 것이 </span>
              <span className="header-title">지금 핫하니?</span>
            </div>
            <VerticalText />
          </div>
          <div className="content">
            <span className="title">이전 중요 이슈</span>
            <div className="issue-container">
              <div className="title-container">
                <span className="issue-title">인명 피해 가습기 살균제</span>
                <button className="detail-button">자세히보기</button>
              </div>
              <Slider {...settings}>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹 1</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹 2</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹 3</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹 4</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="issue-container">
              <div className="title-container">
                <span className="issue-title">인명 피해 가습기 살균제</span>
                <button className="detail-button">자세히보기</button>
              </div>
              <Slider {...settings}>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹</span>
                    <button><AlterIcon/></button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
    )
  }
}

export default Main;