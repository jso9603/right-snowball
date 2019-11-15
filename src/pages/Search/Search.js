import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ['남양 유업', '한샘']
    }
  }

  render() {
    const { search } = this.state;

    return (
      <div className="search-page">
        <input className="search-keyword" type="text" placeholder="키워드를 입력하세요." />
        <div className="search-recent-box">
          <div className="search-recent">최근 검색 목록</div>
          <div className="search-delete">전체삭제</div>
        </div>
        {search.map((keyword, i) => (
          <li key={i} className="search-list">{keyword}</li>
        ))}
      </div>
    )
  }
}

export default withRouter(Search);