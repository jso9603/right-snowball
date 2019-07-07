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
              <span>3 갑질논란</span>
            </div>
            <div>
              <span>4 유해물질</span>
            </div>
            {/*<div>*/}
              {/*<span>5 </span>*/}
            {/*</div>*/}
          </Slider>
        </div>
    );
  }
}