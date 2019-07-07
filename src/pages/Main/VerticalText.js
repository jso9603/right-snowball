import React, {Component} from "react";
import Slider from "react-slick";

export default class VerticalText extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      authPlay: true,
      autoplaySpeed: 100,
      cssEase: "linear"
    };
    return (
        <div className="vertical-container">
          <Slider {...settings}>
            <div>
              <span>1 전범기업</span>
            </div>
            <div>
              <span>2 불매운동</span>
            </div>
            <div>
              <span>3 아무말 대잔치</span>
            </div>
            <div>
              <span>4 무언가무언가</span>
            </div>
            <div>
              <span>5 흠</span>
            </div>
            <div>
              <span>6 ㅜㅜ</span>
            </div>
          </Slider>
        </div>
    );
  }
}