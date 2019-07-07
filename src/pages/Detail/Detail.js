import React, { Component } from 'react';
import { withRouter } from 'react-router';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
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

    this.clickPorudct = this.clickPorudct.bind(this);
  }

  componentWillMount() {
    let { match: { params: { id } }, history } = this.props;
    let detailContent;

    console.log('id: ', id);

    for (let i = 0; i<result.topic.length; i++) {
      if (result.topic[i].id === Number(id)) {
        console.log('detailContent: ', result.topic[i]);
        detailContent = result.topic[i].products;
      }
    }
  }

  clickPorudct() {
    console.log('click')
    this.setState({ showPopup: true }, () => {
      if (this.state.showPopup) {
        this.props.history.push('/Product');
      }
    });
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
          <span style={{color: '#9e9e9e'}}>&nbsp;2018.03.26</span>
        </p>
        
        <div className="keywords">
          <hr/>
          <span className="one" style={{ border: 'solid 1px #23a7ee', color: '#23a7ee' }}>#폐에_안좋은_제품(8)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#살균제주의(20)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#옥시_생활용품(150)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#세탁용품(21)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#방향제(4)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#제습제(7)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#탈취제(3)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#청소용품(15)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#세정제(3)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#식기세척기세제(11)</span>
          <span className="one" style={{ border: 'solid 1px #979797', color: '#333333' }}>#제모용품(3)</span>
        </div>

        <div onClick={this.clickPorudct}>제품들</div>
      </div>
    )
  }
}

export default withRouter(Detail);