import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CardSlider from '../../components/CardSlider/CardSlider';
import './Detail.css';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
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

  render() {
    const {
      cardData,
      tags,
      description
    } = this.state;

    return (
      <div className="detail-page">
        <CardSlider data={cardData} />
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