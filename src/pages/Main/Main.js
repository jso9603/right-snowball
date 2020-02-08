import React, {Component} from 'react';
import ChatOutlined from '@material-ui/icons/ChatOutlined';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import CheckIcon from '@material-ui/icons/Check';
import ExpandLess from '@material-ui/icons/ExpandLess';
import enterpriseData from '../Data/enterprise.json';
import SnowIcon from '@material-ui/icons/AcUnitOutlined';
import './Main.css';

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
      itemsToShow: (window.history.state && window.history.state.itemsToShow) || 7,
      result: enterpriseData,
      categories: [
        {code: 'a', title: '갑질/언행'},
        {code: 'b', title: '마약'},
        {code: 'c', title: '환경오염'},
        {code: 'd', title: '성차별/성범죄'},
        {code: 'e', title: '채용/노동'},
        {code: 'f', title: '동물'},
        {code: 'g', title: '기타'},
      ],
      isModalShow: true,
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


  handleClickDot(idx) {
    if (idx === this.state.selectedItem) return;

    this.setState({ selectedItem: idx });

    this.slider.slickGoTo(idx-1);
  }

  goDetail = param => {
    this.props.history.push(`/Detail/${param}`);
  };

  handleClickShowMore = () => {
    this.setState((prevState, props) => ({itemsToShow: prevState.itemsToShow + 7}), () => {
      window.history.replaceState({itemsToShow: this.state.itemsToShow}, '')
    })
  }
  
  clickScrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  }

  clickCategory = (code) => {
    this.props.history.push(`/Category/${code}`)
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalShow: !prevState.isModalShow,
    }))
  }
  
  render() {
    const {
      categories,
      result,
      itemsToShow,
      isModalShow
    } = this.state;

    const resultCtn = Object.keys(result).length;

    return (
        <div className="main">
          <div className={`modal-container ${isModalShow? 'show-modal' : ''}`}>
            <div className="overlay" />
            <div className="modal-content">
              <div>
                <SnowIcon className="snow-icon rotating" />
                <p><b style={{color: '#2ca2ef'}}>바른 눈덩이</b>는</p>
                <p>다양한 논란이 있었던<br />🏢기업과 📰이슈,</p>
                <p>그리고 사건 이후 소비자들이<br /> 어떤 변화를 만들어가는지 🚶‍♀️🏃‍♀️ <br />알려주고 있어요!</p>
              </div>
              <button type="button" className="modal-button" onClick={this.toggleModal}>
                알겠어요
              </button>
              <div className="never-shown-button">다음에 안볼래요</div>
            </div>
          </div>

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
            {Object.keys(result).reverse().slice(0, itemsToShow).map((key, idx) => {
              const img = (result[key].imgs && result[key].imgs[0]) || 'http://placehold.it/320x200';
              return (
                <div key={idx} className={`result-idx ${(idx === 0) ? 'nonePaddingTop' : ''} ${(idx === (itemsToShow-1) || idx === resultCtn-1) ?' noneBorderBottom' : ''}`} >
                  <div className="result-company-image-wrapper">
                    <img src={img} className="result-company-image" alt="company" onClick={() => this.goDetail(key)} />
                  </div>

                  {/* <span className="result-like" onClick={() => {alert('로그인 기능은 준비중입니다.')}}>
                    <span className="result-like-count">{result[key].like}</span>
                    {likeList[idx] ? (
                      <FavoriteIcon style={{color: 'red'}} />
                    ) : (
                      <FavoriteBorder style={{color: 'red'}} />
                    )}
                  </span> */}

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

export default Main;