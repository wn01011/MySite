import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { useState, useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import MainContainer from "./Components/Main/Container";
import SideBarContainer from "./Components/SideBar/Container";
import AdminContainer from "./Components/Admin/Container";

import ScrollEvent from "./utils/scrollevent.jsx";
import WheelEvent from "./utils/wheelevent";
import CursorEvent from "./utils/cursorevent";

function App() {
  const [sideWidth, setSideWidth] = useState(200);
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const topRef = useRef();
  const bottomRef = useRef();
  const cursorType = useSelector((state) => state.tools.cursor);

  // axios.get("/api").then((data) => {
  //   // console.log(data);
  // });

  // useEffect(() => {
  //   let cursorId = setInterval(() => {
  //     setCursorIdx((state) => {
  //       return (state % 14) + 1;
  //     });
  //   }, 100);
  //   return () => {
  //     clearInterval(cursorId);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <AppBox className="App" ref={topRef}>
        <ScrollEvent scrollDir={scrollDir} setScrollDir={setScrollDir} />
        <WheelEvent bottomRef={bottomRef} topRef={topRef} />
        <CursorEvent cursorType={cursorType} />
        <SideBarContainer setSideWidth={setSideWidth} sideWidth={sideWidth} />
        <Routes>
          <Route
            path="/admin"
            element={<AdminContainer></AdminContainer>}
          ></Route>
          <Route
            path="/"
            element={<MainContainer sideWidth={sideWidth} />}
          ></Route>
          <Route
            path="/:title/:text"
            element={<MainContainer sideWidth={sideWidth} />}
          ></Route>
          <Route
            path="/:title"
            element={<MainContainer sideWidth={sideWidth} />}
          ></Route>
        </Routes>
      </AppBox>
      <BottomBox ref={bottomRef} />
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

  ::before {
    content: " ";
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url("/img/mountain.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -100;
  }

  /* cursor: url(${({ cursor }) =>
    "/img/normal/cursor" + cursor + ".png"}) 14 14,
    url("/img/normal/cursor5.png") 14 14, auto; */
  /* cursor: url("/img/special/ezgif.com-gif-maker.gif"), auto; */
  cursor: none;
`;

const BottomBox = styled.div`
  width: 100%;
  height: 10px;
`;
