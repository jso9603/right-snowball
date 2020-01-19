import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CheckIcon from '@material-ui/icons/Check';
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

  renderCategories = () => {
    const { categories } = this.state;
    let arrCategories = [];

    for(let i = 0; i< categories.length; i++) {
      arrCategories.push(
        <span key={i} className="result-company-category">
          &nbsp;{categories[i]}&nbsp;
        </span>
      );
    }

    return arrCategories;
  }

  renderTags = () => {
    const { tags } = this.state;
    let arrTags = [];

    for (let i = 0; i < tags.length; i++) {
      arrTags.push(
        <span key={i} className="result-company-tag">
          <CheckIcon className="check-icon" style={{fontSize: 'large'}} />
          {tags[i]}&nbsp;
        </span>
      );
    }

    return arrTags;
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
        <div className="header-card" style={{width: '100%'}}>
          <div className="result-company-categories">{this.renderCategories()}</div>
          <h5 className="company-name">{name}</h5>
          <div className="share"><ShareOutlinedIcon /></div>
        </div>
        <div className="company-info">
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