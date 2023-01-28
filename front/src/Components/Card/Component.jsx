import styled from "styled-components";
import AboutMeContainer from "../Main/AboutMe/Container";
import CSSContainer from "../Main/Languages/CSS/Container";
import JavascriptContainer from "../Main/Languages/Javascript/Container";
import ReactContainer from "../Main/Languages/React/Container";
import ProjectsContainer from "../Main/Projects/Container";

const CardComponent = ({ title }) => {
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
    }
  };

  return (
    <CardComponentBox>
      <TitleBox>{title}</TitleBox>
      <ContentBox>{cardDef()}</ContentBox>
    </CardComponentBox>
  );
};

export default CardComponent;

const CardComponentBox = styled.div`
  width: 90%;
  border-radius: 15px;
  border: 5px solid black;
  background-color: #ffffe8;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const TitleBox = styled.div`
  width: 50%;
  margin: 10px 0px;
  padding: 10px 0px;
  background-color: #cde990;
  border-radius: 15px;
  font-size: 3rem;
  font-weight: 600;
  line-height: 4rem;
  letter-spacing: -0.1rem;
`;

const ContentBox = styled.div`
  width: 90%;
  margin: 10px 0px;
  padding: 10px 0px;
`;
