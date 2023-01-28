import styled from "styled-components";
import ContentContainer from "./Content/Container";

const ContentBoxComponent = () => {
  return (
    <ContentBoxComponentBox>
      <ContentContainer title={"AboutMe"}></ContentContainer>
      <ContentContainer
        title={"Languages"}
        text={["CSS", "Javascript", "React"]}
      ></ContentContainer>
      <ContentContainer title={"Projects"}></ContentContainer>
      <ContentContainer></ContentContainer>
      <ContentContainer></ContentContainer>
      <ContentContainer></ContentContainer>
    </ContentBoxComponentBox>
  );
};

export default ContentBoxComponent;

const ContentBoxComponentBox = styled.div`
  padding: 15px 10px 0px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  border-radius: 15px;
  border: 5px solid black;
  background-color: #ffffe8;
  position: sticky;
`;
