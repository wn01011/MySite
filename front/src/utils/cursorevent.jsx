import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../modules/tools";
import styled from "styled-components";
const CursorEvent = ({ cursorType }) => {
  let cursorUrl = "/img/normal/cursor.gif";
  switch (cursorType) {
    case "normal":
      cursorUrl = "/img/normal/cursor.gif";
      break;
    case "special":
      cursorUrl = "/img/special/special.gif";
      break;
    case "focus":
      cursorUrl = "/img/focus/focus1.png";
      break;
    default:
      break;
  }

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickedPos, setClickedPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  let clickedId;
  useEffect(() => {
    window.onmousemove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };
    window.onclick = (e) => {
      setClicked(true);
      setClickedPosition({ x: e.pageX, y: e.pageY });
      let clickedId = setTimeout(() => {
        setClicked(false);
      }, 350);
    };
  }, [clickedId]);
  return (
    <>
      <ClickEffectBox
        position={clickedPos}
        clicked={clicked}
        className={clicked ? "clickEffect" : ""}
      ></ClickEffectBox>
      <CursorBox position={position} cursorUrl={cursorUrl}>
        <img src={cursorUrl} alt="" />
      </CursorBox>
      {/* <FollowCursorBox
        position={position}
        cursorUrl={cursorUrl}
        cursorType={cursorType}
      >
        <img src={cursorUrl} alt="" />
      </FollowCursorBox> */}
    </>
  );
};

export default CursorEvent;

const CursorBox = styled.div.attrs(({ position }) => ({
  style: {
    left: position.x - 14 + "px",
    top: position.y - 14 + "px",
  },
}))`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 100000;
  pointer-events: none;

  img {
    width: 100%;
  }
`;
const FollowCursorBox = styled.div.attrs(({ position, cursorType }) => ({
  style: {
    left: position.x - 14 + "px",
    top: position.y - 14 + "px",
    display: cursorType == "normal" ? "inline" : "none",
  },
}))`
  /* display: ${({ cursorType }) =>
    cursorType == "normal" ? "inline" : "none"}; */
  opacity: 0.5;
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 100000;
  pointer-events: none;
  /* left: ${({ position }) => position.x - 14 + "px"}; */
  /* top: ${({ position }) => position.y - +14 + "px"}; */

  img {
    width: 100%;
  }

  transition: left ease-in-out 0.1s, top ease-in-out 0.1s;
`;

const ClickEffectBox = styled.div`
  display: ${({ clicked }) => (clicked ? "inline" : "none")};
  pointer-events: none;
  position: absolute;
  width: 50px;
  height: 50px;
  border: solid green;
  border-radius: 50%;
  z-index: 9999;
  left: ${({ position }) => position.x - 25 + "px"};
  top: ${({ position }) => position.y - 25 + "px"};

  animation: ${({ clicked }) => (clicked ? "clickEffect" : "")} 0.4s ease-in-out;

  @keyframes clickEffect {
    from {
      width: 50px;
      height: 50px;
      opacity: 0.8;
      border-width: 0.3rem;
    }
    to {
      width: 300px;
      height: 300px;
      opacity: 0.1;
      border-width: 0.015rem;
      left: ${({ position }) => position.x - 150 + "px"};
      top: ${({ position }) => position.y - 150 + "px"};
    }
  }
`;
