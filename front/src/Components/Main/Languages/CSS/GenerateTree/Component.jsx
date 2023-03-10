import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { action } from "../../../../../modules/tools";
import iframeComp from "../../../../../utils/iframeComp";

const GenerateTreeComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <GenerateTreePositionBox>
      <GenerateTreeComponentBox
        dangerouslySetInnerHTML={iframeComp({
          src: "http://3.36.91.10:9003",
        })}
      ></GenerateTreeComponentBox>
      <Link to={"/Languages/CSS"}>
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
      <ReferenceBox>
        <a href="https://www.youtube.com/watch?v=wBAtHDdaZ2Y" target={"_blank"}>
          Reference : Franks laboratory
        </a>
      </ReferenceBox>
    </GenerateTreePositionBox>
  );
};

export default GenerateTreeComponent;

const GenerateTreeComponentBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  #iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
`;

const GenerateTreePositionBox = styled.div`
  width: 90%;
  position: relative;
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

const ReferenceBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  font-size: 0.8rem;
  background-color: #ffffe8;
  line-height: 2rem;
  a {
    color: #5e7042;
    text-decoration: none;
    outline: none;
    transition: font-size 0.5s;
  }

  a:hover,
  a:active {
    font-size: 1rem;
    text-decoration: none;
    color: #aacb73;
    cursor: none;
  }
`;
