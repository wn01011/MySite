import styled from "styled-components";
import InnerCardContainer from "../../Card/InnerCard/Container";

const BlockChainComponent = () => {
  return (
    <ComponentBox>
      <InnerCardContainer
        title={"Coin Explorer"}
        text1={
          "단순히 개인 체인 네트워크 상의 블록, 트랜젝션, 계정 정보를 띄워만 주는 프로젝트입니다.\nEther Scan 이라는 Block Explorer 사이트를 참고하여 만들었습니다."
        }
        text2={
          "AWS 상에 Geth를 여는 것에 성능상 문제가 있어 업로드 하지 못했습니다."
        }
        imgUrlArray={[
          "BlockExplorer/BlockExplorer1.png",
          "BlockExplorer/BlockExplorer2.png",
          "BlockExplorer/BlockExplorer3.png",
          "BlockExplorer/BlockExplorer4.png",
        ]}
        stackArray={["React", "Javascript", "NodeJS", "Redux"]}
        gitAddress={"https://github.com/wn01011/BlockProject/"}
        // projectLink={"/BlockExplorer"}
      ></InnerCardContainer>
    </ComponentBox>
  );
};

export default BlockChainComponent;

const ComponentBox = styled.div`
  display: flex;
  justify-content: center;
`;
