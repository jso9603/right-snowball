import React, { Component } from 'react';
import { withRouter } from 'react-router';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import AlterIcon from '@material-ui/icons/CompareArrows';
import './Detail.css';

// JSON
import { mock } from '../Data/mockData';
const result = mock;

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false
    }
  }

  componentWillMount() {
    let { match: { params: { id } } } = this.props;

    console.log('id: ', id);

    for (let i = 0; i<result.topic.length; i++) {
      if (result.topic[i].id === Number(id)) {
        console.log('detailContent: ', result.topic[i]);
      }
    }
  }


  render() {
    const { showPopup } = this.state;
    return (
      <div className="detail-page" style={{ backgroundColor: showPopup && 'rgba(51, 51, 51, 0.85)'}}>
        <button className="bookmark">
          <BookmarkIcon style={{width: '39px', height: '39px'}}/>
        </button>
        <p className="title">인명피해<br/>가습기 살균제</p>
        <p className="name">기업명 | 옥씨</p>
        <p className="issue">이슈 | 영유아와 임산부 140여 명이 목숨을 잃은 가습기 살균제 사망사건</p>
        <p className="news">
          <span>참고기사 | </span>
          <span style={{textDecoration: 'underline'}}>TF현장] 불매운동 그 후, 대형마트에서 후…</span>
          <span style={{color: '#9e9e9e'}}>2018.03.26</span>
        </p>
        
        <div className="keywords">
          <hr/>
          <div style={{marginBottom: '10px', textAlign: 'center' }}>
            <span className="one" style={{ border: 'solid 1px #23a7ee', color: '#23a7ee' }}>#폐에_안좋은_제품(8)</span>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#살균제주의(20)</span>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#옥시_생활용품(150)</span>
          </div>
          <div style={{marginBottom: '10px', textAlign: 'center' }}>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#세탁용품(21)</span>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#방향제(4)</span>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#제습제(7)</span>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#청소용품(15)</span>
          </div>
          <div style={{marginBottom: '10px', textAlign: 'center' }}>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#세정제(3)</span>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#식기세척기세제(11)</span>
            <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#제모용품(3)</span>
          </div>
        </div>

          <div className="thumbnail-container">
            <div style={{display: 'inline-block'}}>
              <div className="image-container">
                <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
              </div>

              <div className="thumbnail-title">
                <span className="product-title">옥시싹싹</span>
                <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
              </div> 
            </div>
            
            <div style={{display: 'inline-block'}}>
              <div className="image-container">
                <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
              </div>
              <div className="thumbnail-title">
                <span className="product-title">아토오가닉</span>
                <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
              </div>
            </div>
            
            <div style={{display: 'inline-block'}}>
              <div className="image-container">
                <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
              </div>
              <div className="thumbnail-title">
                <span className="product-title">베지터블 홈 가습기클린업</span>
                <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
              </div>
            </div>
          </div>

          <div className="thumbnail-container">
            <div style={{display: 'inline-block'}}>
              <div className="image-container">
                <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
              </div>

              <div className="thumbnail-title">
                <span className="product-title">옥시싹싹</span>
                <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
              </div> 
            </div>
            
            <div style={{display: 'inline-block'}}>
              <div className="image-container">
                <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
              </div>
              <div className="thumbnail-title">
                <span className="product-title">아토오가닉</span>
                <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
              </div>
            </div>
            
            <div style={{display: 'inline-block'}}>
              <div className="image-container">
                <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
              </div>
              <div className="thumbnail-title">
                <span className="product-title">베지터블 홈 가습기클린업</span>
                <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
              </div>
            </div>
          </div>

        

        {/* <div className="title-container">
          <div className="thumbnail-container">
            <div className="image-container">
              <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
            </div>
            <div className="thumbnail-title">
              <span className="product-title">옥시싹싹</span>
              <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
            </div>

            <div className="image-container">
              <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
            </div>
            <div className="thumbnail-title">
              <span className="product-title">아토오가닉</span>
              <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
            </div>
            
            <div className="image-container">
              <img width="100" src="https://t1.daumcdn.net/cfile/tistory/230C2A435874E30F1E" alt="image1"/>
            </div>
            <div className="thumbnail-title">
              <span className="product-title">베지터블 홈 가습기클린업</span>
              <button style={{backgroundColor: 'transparent'}}><AlterIcon/></button>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default withRouter(Detail);