import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/tools";

const iframeComp = () => {
  return {
    __html:
      '<iframe src="./FindMiddleProj/index.html" width="100%" height="100%"></iframe>',
  };
};

const FindMiddleComponent = () => {
  const dispatch = useDispatch();
  return (
    <FindMiddlePositionBox>
      <FindMiddleComponentBox
        dangerouslySetInnerHTML={iframeComp()}
      ></FindMiddleComponentBox>
      <Link to={"/Projects"}>
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
    </FindMiddlePositionBox>
  );
};

export default FindMiddleComponent;
const FindMiddlePositionBox = styled.div`
  width: 90%;
  height: 80vh;
  position: relative;
`;
const FindMiddleComponentBox = styled.div`
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
