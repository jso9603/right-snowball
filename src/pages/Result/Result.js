import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '식품',
      result: [
        {
          companyName: 'oo기업',
          tags: ['갑질', '성차별', '강매', '식품', '대리점'],
          img: 'http://placehold.it/320x200'
        },
        {
          companyName: 'xx기업',
          tags: ['뭘까', '뭐지', '뭐야'],
          img: 'http://placehold.it/320x200'
        }
      ]
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

  render() {
    const {
      search,
      result
    } = this.state;

    return (
      <div className="result-page">
        <h6 className="result-search">'{search}'와 관련된 기업 정보에요</h6>

        <div className="result-data-area">
          {result.map((data, idx) => (
            <div key={idx}>
              <h5 className="result-company-name">{data.companyName}</h5>
              {this.showTags(idx)}

              <div className="result-horizontal-line"></div>
              <img src={data.img} className="result-company-image" alt="company"></img>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Result);