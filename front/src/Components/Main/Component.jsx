import styled from "styled-components";
import HeadNavContainer from "./HeadNav/Container";
import { useDispatch } from "react-redux";
import CardContainer from "../Card/Container";
import FindMiddleContainer from "./Projects/FindMiddle/Container";

const MainComponent = ({ sideWidth, mainView, route }) => {
  const curMainView = route.text ? route.text : route.title;
  const MainViewDiv = () => {
    {
      switch (curMainView) {
        case "AboutMe":
          return <CardContainer title={"AboutMe"} />;
        case "CSS":
          return <CardContainer title={"CSS"} />;
        case "Javascript":
          return <CardContainer title={"Javascript"} />;
        case "React":
          return <CardContainer title={"React"} />;
        case "Projects":
          return <CardContainer title={"Projects"} />;
        case "FindMiddle":
          return <FindMiddleContainer />;
        default:
          return <CardContainer title={"AboutMe"} />;
      }
    }
  };
  return (
    <MainBox sideWidth={sideWidth}>
      <HeadNavContainer></HeadNavContainer>
      {MainViewDiv()}
    </MainBox>
  );
};

export default MainComponent;

const MainBox = styled.div`
  width: calc(100% - ${(props) => props.sideWidth}px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  transition: width 0.3s linear;
`;
