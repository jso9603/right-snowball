import React, {Component} from 'react';
import Slider from "react-slick";
import AlterIcon from '@material-ui/icons/CompareArrows';
import './Main.css';

class Main extends Component {
  goDetail = () => {
    this.props.history.push('/Detail/1');
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

    return (
        <div className="main">
          <div className="hot-issue-container">
            <div className="hot-issue-title">지금 가장 뜨거운 눈덩이</div>
          </div>
          {/* <div className="content">
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
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹 2</span>
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹 3</span>
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹 4</span>
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="issue-container" style={{marginBottom: '50px'}}>
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
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹</span>
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹</span>
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
                <div className="thumbnail-container">
                  <div className="image-container">
                    <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
                  </div>
                  <div className="thumbnail-title">
                    <span className="product-title">옥시싹싹</span>
                    <button onClick={_ => this.props.history.push('/Product')}><AlterIcon/></button>
                  </div>
                </div>
              </Slider>
            </div>s
          </div> */}
        </div>
    )
  }
}

// const test = () => {
//   fetch('http://localhost:3050/api/test', {
//     method: 'GET'
//   })
//   .then((response) => console.log('SUCCESS'));
// }

export default Main;