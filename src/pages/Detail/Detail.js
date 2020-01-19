import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CardSlider from '../../components/CardSlider/CardSlider';
import enterprises from '../Data/enterprise.json';
import BarChart from '../../components/Chart/BarChart';
import './Detail.css';

class Detail extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)

    const entId = this.props.match.params.id;
    const entObject = enterprises[entId];
    
    this.setState({...entObject})
  }

  renderTags = () => {
    const { tags } = this.state;
    let arrHTML = [];

    for (let i = 0; i < tags.length; i++) {
      arrHTML.push(
        <span key={i} className="result-company-tag">#{tags[i]}&nbsp;</span>
      );
    }

    return arrHTML;
  }

  render() {
    const {
      name,
      desc,
      imgs,
      journalUrl,
      productUrl,
      chartData,
    } = this.state;

    return (
      <div className="detail-page">
        {/* <CardSlider data={imgs} /> */}
        <div className="company-imgs">
          <img src={imgs} alt="company-img" />
        </div>
        <div className="company-info">
          <div style={{width: '100%'}}>
            <h5 className="company-name">{name}</h5>
            <div className="share"><ShareOutlinedIcon /></div>
          </div>
          <div className="result-company-tags">{this.renderTags()}</div>
          <p className="company-description">{desc}</p>
          {chartData ? (
            <div>
              <p className="chart-title">매출액/영업이익 추이</p>
              <div style={{height: '320px', width: '100%', marginBottom: '15px'}}>
                <BarChart chartData={chartData} />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          
          <button className="btn-product-list" onClick={()=> window.open(productUrl, "_blank")}>제품 리스트로 이동하기</button>
          <button className="btn-news news-last" onClick={()=> window.open(journalUrl, "_blank")}>관련 기사 페이지로 이동</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Detail);