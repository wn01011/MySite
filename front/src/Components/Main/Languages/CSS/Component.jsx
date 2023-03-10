import styled from "styled-components";
import InnerCardContainer from "../../../Card/InnerCard/Container";
const CSSComponent = () => {
  return (
    <CSSComponentBox>
      <InnerCardContainer
        title={"Generate Tree"}
        text1={
          "canvas에 프렉탈 구조를 사용해 나무 모양 오브젝트를 그리는 소규모 프로젝트입니다."
        }
        text2={"canvas를 어떻게 다루는지 알게된 프로젝트였습니다."}
        gitAddress={
          "https://github.com/wn01011/CSS_Effect/tree/main/FluidAnimation"
        }
        imgUrlArray={[
          "/GenTreeProj/img/genTree.gif",
          "/GenTreeProj/img/GenTree1.png",
          "/GenTreeProj/img/GenTree2.png",
        ]}
        stackArray={["HTML", "CSS", "Javascript"]}
        projectLink={"/GenerateTree"}
      ></InnerCardContainer>

      <InnerCardContainer
        title={"Shoot the Div"}
        text1={"마우스 이벤트를 이용한 간단한 클릭 게임입니다."}
        text2={"HTML/CSS에 처음으로 JS를 입혀본 프로젝트였습니다."}
        gitAddress={"https://github.com/wn01011/CSS_Effect/tree/main/FPS_Proj"}
        imgUrlArray={["/FPSProj/img/fps.gif"]}
        stackArray={["HTML", "CSS", "Javascript"]}
        projectLink={"/FPS"}
      ></InnerCardContainer>

      <InnerCardContainer
        title={"Menu Indicator"}
        text1={"MenuBar 디자인 샘플입니다.."}
        text2={"예전에 참조한 코드가 있는데 찾을 수 없어 기재하지 못했습니다."}
        gitAddress={
          "https://github.com/wn01011/CSS_Effect/tree/main/MagicNavigationMenuIndicator"
        }
        imgUrlArray={["/MenuIndicatorProj/img/MagicNavigation.gif"]}
        stackArray={["HTML", "CSS"]}
        projectLink={"/MenuIndicator"}
      ></InnerCardContainer>
    </CSSComponentBox>
  );
};

export default CSSComponent;

const CSSComponentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
`;
