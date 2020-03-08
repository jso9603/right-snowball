import React, { Component } from 'react';
import enterpriseData from '../Data/enterprise.js';
import CheckIcon from '@material-ui/icons/Check';
import './Result.css';

let likeList = [false, false];

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsToShow: 7,
      result: [],
      search: ''
    }
  }

  componentWillMount() {
    let search = this.props.match.params.search
    let result = {};

    const jsonCnt = Object.keys(enterpriseData).length

    this.setState({ search });

    for (const i in enterpriseData) {
      for (let j = 0; j < enterpriseData[i].categories.length; j++) {
        if (enterpriseData[i].categories[j].includes(search, 0)) {
          result[enterpriseData[i].name] = enterpriseData[i];
        }
      }

      for (let j = 0; j < enterpriseData[i].tags.length; j++) {
        if (enterpriseData[i].tags[j].includes(search, 0)) {
          result[enterpriseData[i].name] = enterpriseData[i];
        }
      }

      if (enterpriseData[i].name.includes(search)) {
        result[enterpriseData[i].name] = enterpriseData[i];
      }

      if (jsonCnt - 1 === enterpriseData[i].cnt) {
        this.setState({ result });
      }
    }
  }

  showTags = (i) => {
    const { result } = this.state;

    const tags = result[i].tags;
    let arrHTML = [];

    for (let i = 0; i < tags.length; i++) {
      arrHTML.push(
        <span key={i} className="result-company-tag">
          <CheckIcon className="check-icon" style={{fontSize: 'medium', marginRight: 2}} />
          {tags[i]}&nbsp;
        </span>
      );
    }

    return arrHTML;
  }

  fullLike = (i) => {
    likeList[i] = !likeList[i];
    this.forceUpdate();
  }

  goDetail = param => {
    this.props.history.push(`/Detail/${param}`);
  };

  render() {
    const { itemsToShow, search, result } = this.state;

    const resultCtn = result.length;

    return (
      <div className="result-page">
        <div className="result-data-area">
          <div className="title">
            <span style={{fontWeight: 700}}>{`'${search}'`}</span>
            과 관련된 결과입니다
          </div>
          {Object.keys(result).slice(0, itemsToShow).map((key, idx) => {
            const img = (result[key].imgs && result[key].imgs[0]) || 'http://placehold.it/320x200';
            return (
              <div key={idx} className={`result-idx ${(idx === 0) ? 'nonePaddingTop' : ''} ${(idx === (itemsToShow-1) || idx === resultCtn-1) ?' noneBorderBottom' : ''}`}>
                <div key={idx} className="result-company-image-wrapper">
                  <img src={img} className="result-company-image" alt="company" onClick={() => this.goDetail(result[key].cnt)} />
                </div>

                <div className="result-right-wrapper">
                  {/* not designed yet */}
                  <div className="result-category">
                    {result[key].categories.map((item, index) => {
                      if (index > 1) return null;
                      if (index > 0) {
                        return (
                          <span className="result-category-name" key={index}>
                            외 {result[key].categories.length - 1}개
                          </span>
                          )
                      }
                      return (
                        <span className="result-category-name" key={index}>
                          {`${item} `}
                        </span>
                      )
                    })}
                  </div>
                  <div className="result-data-header">
                    <h5 className="result-company-name" onClick={() => this.goDetail(result[key].cnt)}>{result[key].name}</h5>
                  </div>
                  <div className="result-company-tags">{this.showTags(key)}</div>
                </div>
                <div className={`${(idx === (itemsToShow-1) || idx === resultCtn-1) ?' noneBorder' : 'result-horizontal-line'}`}></div>
              </div>
            )})
          }
        </div>

        {(itemsToShow < resultCtn) &&
          <div className="show-more-container">
            <button className="show-more-button" onClick={this.handleClickShowMore}>
              <span className="show-more-text">더보기</span>
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Result;