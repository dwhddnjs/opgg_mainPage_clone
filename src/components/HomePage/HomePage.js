import React from "react";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home-body">
      <div className="home-header1">
        <img
          src="	https://opgg-static.akamaized.net/images/gnb/svg/00-opgglogo.svg"
          alt=""
        />
        <div className="home-title">
          <img
            src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg"
            alt=""
          />
          <span>리그오브레전드</span>
        </div>
        <div className="home-container">
          <button>로그인</button>
        </div>
      </div>
      <div className="home-header2">
        <ul>
          <li>#집에있자</li>
          <li>챔피언 분석</li>
          <li>칼바람</li>
          <li>우르프</li>
          <li>통계</li>
          <li>랭킹</li>
          <li>프로관전</li>
          <li>멀티서치</li>
          <li>OP셜</li>
          <li>커뮤니티</li>
        </ul>
      </div>
      <div className="home-header3">
        <span>경기 국제 e스포츠 대회 온라인 예선, 지금 신청해보세요!</span>
      </div>
    </div>
  );
}

export default HomePage;
