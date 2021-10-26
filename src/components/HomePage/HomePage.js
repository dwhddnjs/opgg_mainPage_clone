import React from "react";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home-body">
      <div className="home-header">
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
    </div>
  );
}

export default HomePage;
