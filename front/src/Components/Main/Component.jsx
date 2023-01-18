import styled from "styled-components";
import HeadNavContainer from "./HeadNav/Container";

const MainComponent = ({ sideWidth }) => {
  return (
    <MainBox sideWidth={sideWidth}>
      <HeadNavContainer></HeadNavContainer>메인입니다.
    </MainBox>
  );
};

export default MainComponent;

const MainBox = styled.div`
  width: calc(100% - ${(props) => props.sideWidth}px);
  text-align: center;
`;
