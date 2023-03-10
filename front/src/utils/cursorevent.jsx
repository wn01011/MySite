import { useEffect, useRef, useState } from "react";
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
      cursorUrl = "/img/normal/cursor.gif";
      break;
  }

  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [clickedPos, setClickedPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [clicked, setClicked] = useState(false);
  const cursorRef = useRef(null);

  let clickedId;

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [position]);

  useEffect(() => {
    window.onclick = (e) => {
      setClicked(true);
      setClickedPosition({ x: e.pageX, y: e.pageY });
      let clickedId = setTimeout(() => {
        setClicked(false);
      }, 350);
    };
  }, [clickedId]);

  useEffect(() => {
    cursorRef.current.style.left = `${position.x - 14}px`;
    cursorRef.current.style.top = `${position.y - 14}px`;
  }, [position]);

  const onMouseMove = (e) => {
    const { pageX: x, pageY: y } = e;
    setPosition({ x: +x, y: +y });
    // For smooth moving, when moving mouse, setPosition from scrolling could be denied.
    window.removeEventListener("scroll", onScroll);
  };

  const onScroll = () => {
    const difference = window.scrollY - lastScrollY;
    setPosition({ x: position.x, y: position.y + difference });
    setLastScrollY(window.scrollY);
    setScroll((state) => !state);
  };

  return (
    <div>
      <style>
        {`
          .custom-cursor {
            position:absolute;
            width : 32px;
            height : 32px;
            pointer-events: none;
            z-index: 10000000;
          }
        `}
      </style>
      <ClickEffectBox
        position={clickedPos}
        clicked={clicked}
        className={clicked ? "clickEffect" : ""}
      ></ClickEffectBox>
      <img ref={cursorRef} src={cursorUrl} alt="" className="custom-cursor" />
    </div>
  );
};

export const onMouseEnter = CursorEvent.onMouseEnter;
export const onMouseLeave = CursorEvent.onMouseLeave;
export default CursorEvent;

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
