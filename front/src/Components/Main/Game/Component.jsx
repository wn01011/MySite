import styled from "styled-components";
import InnerCardContainer from "../../Card/InnerCard/Container";

const GameComponent = () => {
  return (
    <ComponentBox>
      <InnerCardContainer
        title={"Game Sample"}
        text1={"Game sampletext1"}
        text2={"Game sampletext2"}
        imgUrlArray={[]}
        stackArray={["HTML", "CSS", "Javascript"]}
      ></InnerCardContainer>
    </ComponentBox>
  );
};

export default GameComponent;

const ComponentBox = styled.div`
  display: flex;
  justify-content: center;
`;
