import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainContainer from "./Components/Main/Container";
import AdminContainer from "./Components/Admin/Container";

import CursorEvent from "./utils/cursorevent";
import Canscroll from "./utils/Canscroll.jsx";
import { action } from "./modules/tools";

function App() {
  const [innerWidth, setInnerWidth] = useState(0);
  const topRef = useRef();
  const bottomRef = useRef();
  const dispatch = useDispatch();
  const curState = useSelector((state) => state.tools);
  const cursorType = curState.cursor;
  const canScroll = curState.canScroll;
  const audioVolume = curState.audioVolume;
  const inProject = curState.inProject;

  useEffect(() => {
    window.onresize = (e) => {
      setInnerWidth(e.target.innerWidth);
    };
  }, []);

  return (
    <BrowserRouter>
      <CursorEvent cursorType={cursorType} inProject={inProject} />
      <AppBox className="" ref={topRef}>
        <Canscroll canScroll={canScroll}></Canscroll>
        <Routes>
          <Route
            path="/admin"
            element={<AdminContainer></AdminContainer>}
          ></Route>
          <Route
            path="/"
            element={<MainContainer innerWidth={innerWidth} />}
          ></Route>
          <Route
            path="/:title/:text"
            element={<MainContainer innerWidth={innerWidth} />}
          ></Route>
          <Route
            path="/:title"
            element={<MainContainer innerWidth={innerWidth} />}
          ></Route>
        </Routes>
      </AppBox>
      <BottomBox ref={bottomRef} className={"cyber-banner"}>
        <span className="cyber-glitch-3">.</span>Soviet
        <span className="cyber-glitch-3">_</span>Connection
        <span className="cyber-glitch-3">.</span>mp3
        <img
          src={
            audioVolume == 0
              ? "/img/icon/volume-x.svg"
              : audioVolume == 1
              ? "/img/icon/volume-off.svg"
              : audioVolume == 2
              ? "/img/icon/volume-low.svg"
              : "/img/icon/volume-high.svg"
          }
          onClick={() => {
            dispatch(action.setAudioVolume((audioVolume + 1) % 4));
          }}
        />
      </BottomBox>
    </BrowserRouter>
  );
}

export default App;

const AppBox = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  background-color: black;

  ::before {
    content: " ";
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: -2;
    background-image: ${({ inProject }) =>
      inProject ? "" : 'url("/img/cyberpunkBg.png")'};
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -100;
  }
  cursor: none;
`;

const BottomBox = styled.div`
  width: 100%;
  height: 50px;
  text-align: right;
  padding-right: calc(2% + 50px);
  clip-path: none !important;
  cursor: none;
  img {
    padding: 10px;
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    :hover {
      filter: invert(90%);
    }
  }
  overflow: hidden;
`;
