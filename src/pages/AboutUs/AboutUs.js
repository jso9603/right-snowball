import React, {Component} from 'react';
import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-page">
        <hr />
        <p className="header">
          당신의 작은 움직임이 만드는 큰 결과를 응원하는 ‘바른눈덩이’ 입니다.
        </p>
        <hr />
        <div className="content">
          2019년 7월, 팀 '빅걸스'는 우리의 선택이 기업에 미치는 영향에
          주목했습니다. 지금 당장은 나 하나가 가진 힘을 알 수 없지만, 눈송이가
          모여 눈덩이가 되었을 때는 우리가 세상을 변화시킬 수 있습니다. <br />
          <br /> 그 과정에서 공룡처럼 커보이는 기업에 정말 변화가 있었는지,
          누군가 함께 하고 있는지 궁금할 수 있다는 생각이 들었습니다. <br />
          <br />
          이러한 고마운 마음들을 응원하기 위해 2020년 1월, 당신의 작은 움직임이
          만드는 큰 결과를 응원하는 ‘❄ 바른눈덩이’를 시작하게 되었습니다.
        </div>
      </div>
    );
  }
}

export default AboutUs;
