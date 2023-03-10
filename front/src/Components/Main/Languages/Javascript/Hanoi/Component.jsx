import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { action } from "../../../../../modules/tools";
import iframeComp from "../../../../../utils/iframeComp";

const HanoiComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <PositionBox>
      <IframeCompBox
        dangerouslySetInnerHTML={iframeComp({
          src: "http://3.36.91.10:9007",
        })}
      ></IframeCompBox>
      <Link to={"/Languages/Javascript"}>
        <BackBtnBox
          onMouseEnter={() => {
            dispatch(action.setCursor("special"));
          }}
          onMouseLeave={() => {
            dispatch(action.setCursor("normal"));
          }}
        >
          <img src="/img/leftArrow.svg" alt="" />
        </BackBtnBox>
      </Link>
    </PositionBox>
  );
};

export default HanoiComponent;

const PositionBox = styled.div`
  width: 90%;
  height: 80vh;
  position: relative;
`;

const IframeCompBox = styled.div`
  height: 100%;
`;

const BackBtnBox = styled.div`
  cursor: none;
  position: absolute;
  left: -50px;
  top: 0px;
  width: 50px;
  height: 50px;
  img {
    animation: bling-bling 0.8s ease-out forwards infinite;
  }
  :hover {
    img {
      animation: hover-animation 0.8s ease-out forwards infinite;
      transition: filter 0.15s linear;
      filter: invert(89%) sepia(20%) saturate(668%) hue-rotate(304deg)
        brightness(102%) contrast(101%);
    }
  }
  @keyframes bling-bling {
    from {
    }
    50% {
      filter: invert(89%) sepia(20%) saturate(668%) hue-rotate(304deg)
        brightness(102%) contrast(101%);
    }
    to {
    }
  }
`;
