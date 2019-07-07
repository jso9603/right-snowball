import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
        <p className="title">인명피해<br/>가습기 살균제</p>
        <p className="name">기업명 |  옥씨</p>
        <p className="issue">이슈 |  영유아와 임산부 140여 명이 목숨을 잃은 가습기 살균제 사망사건</p>
        <p className="news">참고기사 |  [TF현장] 불매운동 그 후, 대형마트에서 후…</p>

        <div onClick={this.clickPorudct}>제품들</div>
      </div>
    )
  }
}

export default withRouter(Detail);