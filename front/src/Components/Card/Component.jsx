import styled from "styled-components";
import AboutMeContainer from "../Main/AboutMe/Container";
import CSSContainer from "../Main/Languages/CSS/Container";
import JavascriptContainer from "../Main/Languages/Javascript/Container";
import ReactContainer from "../Main/Languages/React/Container";
import ProjectsContainer from "../Main/Projects/Container";
import BlockChainContainer from "../Main/Blockchain/Container";
import UnityContainer from "../Main/Unity/Container";
import GameContainer from "../Main/Game/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { action } from "../../modules/tools";
import AudioVisual from "../../utils/AudioVisualization/AudioVisual";

const CardComponent = ({ title }) => {
  const location = useLocation().pathname.slice(1);
  const mainViewArray = useSelector((state) => state.tools.mainViewArray);
  const curIdx = mainViewArray.findIndex((item) => item == location);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const dispatchCurView = () => {
    dispatch(action.setMainView(location));
    dispatch(action.setInProject(false));
  };

  useEffect(() => {
    dispatchCurView();
  }, [curIdx]);

  const prevClick = () => {
    if (curIdx > 0) {
      navigation("/" + mainViewArray[curIdx - 1]);
    }
  };
  const nextClick = () => {
    if (curIdx < mainViewArray.length - 1) {
      navigation("/" + mainViewArray[curIdx + 1]);
    }
  };

  const cardDef = () => {
    switch (title) {
      case "AboutMe":
        return <AboutMeContainer />;
      case "CSS":
        return <CSSContainer />;
      case "Javascript":
        return <JavascriptContainer />;
      case "React":
        return <ReactContainer />;
      case "Projects":
        return <ProjectsContainer />;
      case "Blockchain":
        return <BlockChainContainer />;
      case "Unity":
        return <UnityContainer />;
      case "Game":
        return <GameContainer />;
    }
  };

  return (
    <CardComponentBox className="cyber-razor-bottom cyber-razor-top bg-cyan fg-white p-3 about-me">
      <TitleBox className="cyber-box about-me">
        <ArrowLeft
          className={curIdx != 0 ? "glowing-text" : "disabled"}
          onClick={() => {
            prevClick();
          }}
        >
          <span>&lt;</span>
        </ArrowLeft>
        <h3 className="cyber-h cyber-glitch-4 about-me">
          {window.innerWidth >= 510 ? title : ""}
        </h3>
        <ArrowRight
          className={
            curIdx != mainViewArray.length - 1 ? "glowing-text" : "disabled"
          }
          onClick={() => {
            nextClick();
          }}
        >
          <span>&gt;</span>
        </ArrowRight>
      </TitleBox>
      <ContentBox>{cardDef()}</ContentBox>
      <AudioBox>
        <AudioVisual width={250} height={250}></AudioVisual>
      </AudioBox>
    </CardComponentBox>
  );
};

export default CardComponent;

const CardComponentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  min-height: 70px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 50px 0px;
  padding: 10px 30px;
  font-size: ${window.innerWidth >= 940
    ? "3rem"
    : window.innerWidth >= 510
    ? "1.5rem"
    : "1rem"};
  font-weight: 600;
  line-height: 4rem;
  letter-spacing: -0.1rem;
  color: #0f0f0f;
  background-color: var(--yellow);
`;

const ContentBox = styled.div`
  width: 90%;
  margin: 10px 0px;
  padding: 10px 0px;
`;

const StyledArrow = styled.div`
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 100%;
  }
`;
const ArrowLeft = styled(StyledArrow)`
  left: 10px;
`;
const ArrowRight = styled(StyledArrow)`
  right: 10px;
`;

const AudioBox = styled.div`
  width: 100vw;
  height: 100px;
`;
