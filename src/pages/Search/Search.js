import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // search: ['남양 유업', '한샘']
      search: JSON.parse(sessionStorage.getItem("search")),
      text: ''
    }
  }

  allDelete = () => {
    sessionStorage.removeItem('search');
    this.setState({
      search: null
    })
    this.forceUpdate();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      this.handleClick();
    }
  }

  handleClick = () => {
    let session = [];
    let recent = JSON.parse(sessionStorage.getItem("search"))
    console.log(recent)

    if (recent !== null) {
      for (let i = 0; i< recent.length; i++) {
        session.push(recent[i])
  
        if (recent.length - 1 === i) {
          session.push(this.state.text);
  
          sessionStorage.setItem('search', JSON.stringify(session));
        }
      }
    } else {
      session.push(this.state.text)

      sessionStorage.setItem('search', JSON.stringify(session));
    }

    this.props.history.push(`/Result/${this.state.text}`);
  }

  searhKeyword = (keyword) => {
    this.props.history.push(`/Result/${keyword}`);
  }

  render() {
    const { search } = this.state;

    return (
      <div className="search-page">
        <input className="search-keyword" type="text" name="text" placeholder="키워드를 입력하세요." onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        {search === null ? (
          <div>
            <div className="search-recent-box">
              <div className="search-recent">최근 검색이 없습니다.</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="search-recent-box">
              <div className="search-recent">최근 검색 목록</div>
              <div className="search-delete" onClick={this.allDelete}>전체삭제</div>
            </div>

            {search.map((keyword, i) => (
              <li key={i} className="search-list" onClick={() => this.searhKeyword(keyword)}>{keyword}</li>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(Search);