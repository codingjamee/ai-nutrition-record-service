import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ButtonCommon from '@components/UI/ButtonCommon';
import './Join.css';
import logo from './9g_logo.png';

const Auth = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);

  const onClick = () => {
    console.log("btn is clicked!");
    setState((prev) => prev + 1);
  };

  return (
    <div className="center-container">
      <div className="logo-container">
        <h1 className="b-regular">9g</h1>
        <h1 className="b-big">구그램</h1>
        <img src={logo} className="logo" />
        <p className="s-big"> 바쁜 당신을 위한</p>
        <p className="s-superlarge">AI 영양사</p>
        <div style={{ marginTop: '60px' }}>
          <ButtonCommon
            variant="default-active"
            size="big"
            onClickBtn={() => navigate(`/login`)}
          >
            로그인
          </ButtonCommon>
        </div>
        <div style={{ marginTop: '10px' }}>
          <ButtonCommon
            customClassName="white"
            size="big"
            onClickBtn={() => navigate(`/join`)}
          >
            회원가입
          </ButtonCommon>
        </div>
        <div style={{ marginTop: '10px' }}>
          <ButtonCommon
            customClassName="lightblue"
            size="big"
            onClickBtn={() => navigate(`/join`)}
          >
            Google로 계속하기
          </ButtonCommon>
        </div>
      </div >
    </div >
  );
};

export default Auth;