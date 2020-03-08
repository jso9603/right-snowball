import React, {useState} from 'react';
import './NotFound.css';

const GenericNotFound = () => {
  const [isClickSunja, setIsClickSunja] = useState(false);

  const handleClickSunja = () => {
    setIsClickSunja(!isClickSunja);
  };

  return (
    <div className="notfound-container">
      <div className="notfound-text">
        <span className="page-title">404</span>
        <span className="page-subtitle">페이지를 찾을 수 없습니다</span>
      </div>
      {isClickSunja ? (
        <img
          onClick={handleClickSunja}
          className="notfound-image"
          src={require('./sunja_notfound-2.png')}
          alt="notfoundsunja2"
        />
      ) : (
        <img
          onClick={handleClickSunja}
          className="notfound-image"
          src={require('./sunja_notfound.png')}
          alt="notfoundsunja1"
        />
      )}
      <div className="notfound-text">
        <span className="page-desc">잘못 들어오셨나 봐요</span>
        <span className="page-desc">온 김에 순자 보고 가세요</span>
      </div>
    </div>
  );
};

export default GenericNotFound;
