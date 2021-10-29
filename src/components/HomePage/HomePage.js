import React, { useState } from "react";
import "./HomePage.scss";

function HomePage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "퇴근해서 기분좋으신 기사님ㅋㅋㅋ",
      time: "11시간 전",
      name: "이종원",
      img: "https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-6…x&oh=6298a5c08aaa4e1336c16ef88055c5e8&oe=617D0E62",
    },
    {
      id: 2,
      title: "아내한테 장난치는 몰카",
      time: "14시간 전",
      name: "크리스",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 3,
      title: "리액트 공부하다 정신나간 사람",
      time: "13시간 전",
      name: "종원",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 4,
      title: "회사 직원에게 뭔가 배워온 아빠",
      time: "12시간 전",
      name: "그그그",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 5,
      title: "k-쌍욕",
      time: "13시간 전",
      name: "종머니",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 6,
      title: "옵지 회원 대상 주 포지션 조사",
      time: "13시간 전",
      name: "종옵지",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 7,
      title: "망나니와 백정",
      time: "15시간 전",
      name: "황족미드",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 8,
      title: "숟가락과 도구의 심리학",
      time: "9시간 전",
      name: "바텀차이",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 9,
      title: "전쳇 하는법",
      time: "11시간 전",
      name: "재그",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
    {
      id: 10,
      title: "전설의 영업 방해",
      time: "11시간 전",
      name: "dwhddnjs",
      img: "https://opgg-com-image.akamaized.net/attach/images/20211027030437.1704584_thumb.jpg?image=w_200",
    },
  ]);

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
      <div className="home-main">
        <div>
          <img
            src="https://opgg-static.akamaized.net/logo/20211017130952.a291bfe6af7e40b896548c57112f7564.png
"
            alt=""
          />
        </div>
      </div>
      <div className="home-search">
        <div>
          <input type="text" placeholder="소환사명, 소환사명, ..." />
          <button>.GG</button>
        </div>
      </div>
      <div className="home-ad">
        <div>
          <span>대충광고</span>
        </div>
      </div>
      <div className="home-talk">
        <div className="home-item">
          <span>OP.GG Talk 인기글</span>
        </div>
        <div className="home-com">
          {items.map((el) => (
            <div className="home-items">
              <span className="home-id">{el.id}</span>
              <img src="" alt="" />
              <div className="home-detail">
                <span className="home-tit">{el.title}</span>
                <div className="home-times">
                  <span>{el.time}</span>
                  <span>{el.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-footer">
        <ul>
          <li>About OPGG</li>
          <li>로고 히스토리</li>
          <li>개인정보처리방침</li>
          <li>도움말</li>
          <li>제휴</li>
          <li>광고</li>
          <li>문의/피드백</li>
          <li>채용</li>
        </ul>
        <div className="home-footer2">
          <p>
            © 2012-2021 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
            reflect the views or opinions of Riot Games or anyone officially
            involved in producing or managing League of Legends. League of
            <br />
            Legends and Riot Games are trademarks or registered trademarks of
            Riot Games, Inc. League of Legends © Riot Games, Inc.
          </p>
          <div className="home-sns">
            <img
              src="https://opgg-static.akamaized.net/images/site/sns/twitter_icon_white.png"
              alt=""
            />
            <img
              src="https://opgg-static.akamaized.net/images/site/sns/instagram_icon_black.png"
              alt=""
            />
            <img
              src="https://opgg-static.akamaized.net/images/site/sns/facebook_icon_black.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
