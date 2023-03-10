import styled from "styled-components";
import InnerCardContainer from "../../Card/InnerCard/Container";

const UnityComponent = () => {
  return (
    <ComponentBox>
      <InnerCardContainer
        title={"Pofol Craft"}
        text1={"Unity sampletext1"}
        text2={"Unity sampletext2"}
        imgUrlArray={[]}
        stackArray={["HTML", "CSS", "Javascript"]}
      ></InnerCardContainer>
    </ComponentBox>
  );
};

export default UnityComponent;

const ComponentBox = styled.div`
  display: flex;
  justify-content: center;
`;
