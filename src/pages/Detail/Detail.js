import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CheckIcon from '@material-ui/icons/Check';
import enterprises from '../Data/enterprise.json';
import BarChart from '../../components/Chart/BarChart';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import CloseIcon from '@material-ui/icons/Close';
import {
  FacebookShareButton,
  KakaoShareButton,
  TwitterShareButton,
  FacebookIcon,
  KakaoIcon,
  TwitterIcon
} from 'react-share-kakao';

import './Detail.css';

const categoriesWithCode = [
  {code: 'a', title: '갑질/언행'},
  {code: 'b', title: '마약'},
  {code: 'c', title: '환경오염'},
  {code: 'd', title: '성차별'},
  {code: 'e', title: '채용/노동'},
  {code: 'f', title: '동물'},
  {code: 'g', title: '기타'},
];

class Detail extends Component {
  currentUrl = window.location.href;

  componentWillMount() {
    window.scrollTo(0, 0)

    const entId = this.props.match.params.id;
    const entObject = enterprises[entId];
    
    this.setState({
      ...entObject,
      isModalShow: false,
      isAfterCopy: false
    })
  }

  clickCategory = (code) => {
    this.props.history.push(`/Category/${code}`)
  }

  renderCategories = () => {
    const { categories } = this.state;
    let arrCategories = [];

    for(let i = 0; i< categories.length; i++) {
      let code;
      categoriesWithCode.forEach(item => {
        if (categories[i] === item.title) {
          code = item.code;
        }
      })

      arrCategories.push(
        <span key={i} 
          className="result-company-category" 
          onClick={() => this.clickCategory(code)}>
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
  
  toggleModal = () => {
    this.setState(prevState => ({
      isModalShow: !prevState.isModalShow,
    }))
  }

  handleClickCopy = () => {
    this.setState({ isAfterCopy: true })

    setTimeout(() => {
      this.setState({ isAfterCopy: false })
    }, 2000);

    var tempElem = document.createElement('textarea');
    tempElem.value = this.currentUrl;  
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
  }

  render() {
    const {
      name,
      desc,
      afterIssued,
      imgs,
      journalUrl,
      productUrl,
      chartData,
      isModalShow,
      isAfterCopy
    } = this.state;

    return (
      <div className="detail-page">
        <div className={`overlay ${isModalShow? 'show-modal' : ''}`}/>
        {/* <CardSlider data={imgs} /> */}
        <div className="back-container" onClick={() => this.props.history.goBack()}>
          <ArrowBackIos style={{fontSize: 'large', color: 'gray'}} />
          <span className="back-title">돌아가기</span>
        </div>
        <div className="company-imgs">
          <img src={imgs} alt="company-img" />
        </div>
        <div className="header-card" style={{width: '100%'}}>
          <div className="result-company-categories">{this.renderCategories()}</div>
          <h5 className="company-name">{name}</h5>
          <div className="share" onClick={this.toggleModal}><ShareOutlinedIcon /></div>
        </div>
        <div className="company-info">
          <div className="result-company-tags">{this.renderTags()}</div>
          <div className="company-description">
            <div className="company-issue">무슨 일이 있었을까요?</div>
              {/* {desc.split('\n').map((item, key) => {
                return <p className="desc-paragraph"key={key}>{item}<br/></p>
              })} */}
              <div dangerouslySetInnerHTML={ {__html: desc} }></div>
          </div>
          <div className="company-description">
            <div className="company-after-issue">이후에는 어떤 일이 있었나요?</div>
              <div dangerouslySetInnerHTML={ {__html: afterIssued} }></div>
          </div>
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
          <button className="btn-news news-last" onClick={()=> window.open(journalUrl, "_blank")}>구글 검색결과 보러가기</button>
        </div>
        
        <div className={`share-container ${isModalShow? 'show-modal' : ''}`}>
          <div className="title">
            <span>공유하기</span>
            <CloseIcon className="close-icon" onClick={this.toggleModal} />
          </div>
          <hr />
          <div className="button-container">
            <div className="button-wrapper" onClick={this.handleClickCopy}>
              <div className="copy-icon-wrapper">
                {isAfterCopy
                  ? <CheckIcon className="copy-icon" />
                  : <FileCopyIcon className="copy-icon" />
                }
              </div>
              <span className="icon-title">
                {isAfterCopy
                  ? <span className="icon-title">복사완료!</span>
                  : <span className="icon-title">링크복사</span>
                }
              </span>
            </div>
            <FacebookShareButton
              url={this.currentUrl}
              children={
                <div className="button-wrapper">
                  <FacebookIcon size={50} round={true} />
                  <span className="icon-title">페이스북</span>
                </div>
              }
            />
            <KakaoShareButton
              url={this.currentUrl}
              children={
                <div className="button-wrapper">
                  <KakaoIcon size={50} round={true} />
                  <span className="icon-title">카카오톡</span>
                </div>
              }
            />
            <TwitterShareButton
              url={this.currentUrl}
              children={
                <div className="button-wrapper">
                  <TwitterIcon size={50} round={true} />
                  <span className="icon-title">트위터</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Detail);