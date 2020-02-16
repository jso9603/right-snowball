import React, { Component } from 'react';
import * as moment from 'moment';
import enterpriseData from '../Data/enterprise.json';
import CheckIcon from '@material-ui/icons/Check';
import './Category.css';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsToShow: 7,
      result: [],
      selectedCategory: '',
    }
  }

  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
    
    let result = []
    let selectedCategory = '';

    switch (this.props.match.params.title) {
      case 'a':
        selectedCategory = '갑질/언행';
        break;
      case 'b':
        selectedCategory = '마약';
        break;
      case 'c':
        selectedCategory = '환경오염';
        break;
      case 'd':
        selectedCategory = '성차별/성범죄';
        break;
      case 'e':
        selectedCategory = '채용/노동';
        break;
      case 'f':
        selectedCategory = '동물';
        break;
      case 'g':
        selectedCategory = '기타';
        break;
      default:
        console.log('not matched');
        break;
    }

    for (const i in enterpriseData) {
      for (let j = 0; j < enterpriseData[i].categories.length; j++) {
        if (selectedCategory === enterpriseData[i].categories[j]) {
          result.push(enterpriseData[i]);
        }

        this.setState({ result });
        this.setState({ selectedCategory });
      }
    }
  }

  goDetail = param => {
    const id = this.state.result[param].cnt
    this.props.history.push(`/Detail/${id}`);
  };

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

  handleClickShowMore = () => {
    this.setState((prevState, props) => ({itemsToShow: prevState.itemsToShow + 7}))
  }

  uploadDate = (date) => {
    let todayDate = moment(new Date()).format('YYYY-MM-DD')
    let uploadAfterMonthDate = moment(date).add(1, 'months').format('YYYY-MM-DD');

    if (moment(uploadAfterMonthDate).isAfter(todayDate, 'day')) {
      return <div className="new-tag">NEW</div>
    }
  }

  render() {
    const { result, itemsToShow, selectedCategory } = this.state;
    const resultCtn = Object.keys(result).length;

    return (
      <div className="category-page">
        <div className="result-data-area">
          <div className="title">
            <span className="bold">{`'${selectedCategory}'`}</span>
            과 관련된 결과입니다
          </div>
          {Object.keys(result).slice(0, itemsToShow).map((key, idx) => {
            const img = (result[key].imgs && result[key].imgs[0]) || 'http://placehold.it/320x200';
            return (
              <div key={idx} className={`result-idx ${(idx === 0) ? 'nonePaddingTop' : ''} ${(idx === (itemsToShow-1) || idx === resultCtn-1) ?' noneBorderBottom' : ''}`}>
                <div key={idx} className="result-company-image-wrapper">
                  <img src={img} className="result-company-image" alt="company" onClick={() => this.goDetail(key)} />
                  {this.uploadDate(result[key].uploadDate)}
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
                    <h5 className="result-company-name" onClick={() => this.goDetail(key)}>{result[key].name}</h5>
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

export default Category;

/* <span className="result-like" onClick={() => {alert('로그인 기능은 준비중입니다.')}}>
  <span className="result-like-count">{result[key].like}</span>
  {likeList[idx] ? (
    <FavoriteIcon style={{color: 'red'}} />
  ) : (
    <FavoriteBorder style={{color: 'red'}} />
  )}
</span> */