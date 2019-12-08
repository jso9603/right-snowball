import React, {Component} from 'react';
import ChatOutlined from '@material-ui/icons/ChatOutlined';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandLess from '@material-ui/icons/ExpandLess';
import enterpriseData from '../Data/enterprise.json';
import './Main.css';

let likeList = [false, false];

const renderCategoryIcon = (code) => {
  switch (code) {
    case 'a':
      return <ChatOutlined style={{color: 'black', fontSize: 30}} />
    case 'b':
      return <LocalPharmacyOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'c':
      return <PublicOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'd':
      return <WcOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'e':
      return <ThumbsUpDownOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'f':
      return <PetsOutlinedIcon style={{color: 'black', fontSize: 30}} />
    case 'g':
      return <BubbleChartOutlinedIcon style={{color: 'black', fontSize: 30}} />
    default:
      console.log('There is no Icon for this code');
  }  
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsToShow: 7,
      result: enterpriseData,
      categories: [
        {code: 'a',title: '갑질/언행'},
        {code: 'b',title: '마약'},
        {code: 'c',title: '환경오염'},
        {code: 'd',title: '성차별/성범죄'},
        {code: 'e',title: '채용/노동'},
        {code: 'f',title: '동물'},
        {code: 'g',title: '기타'},
      ],
    }
  }

  showTags = (i) => {
    const { result } = this.state;

    const tags = result[i].tags;
    let arrHTML = [];

    for (let i = 0; i < tags.length; i++) {
      arrHTML.push(
        <span key={i} className="result-company-tag">#{tags[i]}&nbsp;</span>
      );
    }

    return arrHTML;
  }


  handleClickDot(idx) {
    if (idx === this.state.selectedItem) return;

    this.setState({ selectedItem: idx });

    this.slider.slickGoTo(idx-1);
  }

  goDetail = param => {
    this.props.history.push(`/Detail/${param}`);
  };

  handleClickShowMore = () => {
    this.setState((prevState, props) => ({itemsToShow: prevState.itemsToShow + 7}))
  }
  
  clickScrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  }

  clickCategory = (code) => {
    this.props.history.push(`/Category/${code}`)
  }

  render() {
    const {
      categories,
      result,
      itemsToShow
    } = this.state;

    const resultCtn = Object.keys(result).length;

    return (
        <div className="main">

          <div className="go-to-top-button" onClick={this.clickScrollToTop}>
            <ExpandLess style={{color: 'black', fontSize: 30}} />
          </div>

          <div className="category-container">
            <div className="category-info">
              <div className="category-info-box" style={{backgroundColor: '#23a7ee'}}>
                <div className="content"  style={{color: 'white'}}>이슈별<br />키워드</div>
              </div>
            </div>
            {categories.map((item, index) => {
              return (
                <div className="category-info" key={index}>
                  <div className="category-info-box">
                    <div className="content" onClick={() => this.clickCategory(item.code)}>
                      {renderCategoryIcon(item.code)}
                      <span style={{marginTop: 10}}>{item.title}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="result-data-area">
            {Object.keys(result).slice(0, itemsToShow).map((key, idx) => {
              const img = (result[key].imgs && result[key].imgs[0]) || 'http://placehold.it/320x200';
              return (
                <div key={idx} className="result-idx">
                  <img src={img} className="result-company-image" alt="company" onClick={() => this.goDetail(key)} />

                  <span className="result-like" onClick={() => {alert('로그인 기능은 준비중입니다.')}}>
                    <span className="result-like-count">{result[key].like}</span>
                    {likeList[idx] ? (
                      <FavoriteIcon style={{color: 'red'}} />
                    ) : (
                      <FavoriteBorder style={{color: 'red'}} />
                    )}
                  </span>

                  <div className="result-data-header">
                    {/* not designed yet */}
                    {/* <span>{result[key].categories}</span> */}
                    <h5 className="result-company-name" onClick={() => this.goDetail(key)}>{result[key].name}</h5>
                  </div>
                  <div className="result-company-tags">{this.showTags(key)}</div>
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

export default Main;