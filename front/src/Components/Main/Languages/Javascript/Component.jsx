import styled from "styled-components";
import InnerCardContainer from "../../../Card/InnerCard/Container";

const JavascriptComponent = () => {
  return (
    <ComponentBox>
      <InnerCardContainer
        title={"Rock Scissor Paper"}
        text1={"간단한 가위바위보 프로젝트입니다."}
        text2={
          "setTimeout, setInterval 같은 함수의 스케쥴링을 처음 사용해본 프로젝트였습니다.\n 이를 통해 javascript의 콜백지옥을 해결할 방법에 대한 고민을 해보았고 비동기와 Event Loop에 대해 생각해 볼 수 있는 계기가 되었습니다."
        }
        gitAddress={""}
        imgUrlArray={["/RSPProj/img/RSP.gif", "/RSPProj/img/RSP1.png"]}
        stackArray={["HTML", "CSS", "Javascript"]}
        projectLink={"/RSP"}
      />
      <InnerCardContainer
        title={"Simple Pokemon Style Game"}
        text1={
          "포켓몬풍의 2D 게임을 구현해보았습니다.\n프로젝트 구상 자체에 반응형 고려를 하지 않았기 때문에 화면 크기를 맞춰서 플레이해주셔야합니다."
        }
        text2={
          "웹게임을 구현해보고 싶어 캔버스와 div를 적절히 섞어 포켓몬 스타일 게임을 구현해보려했습니다.\n 미완성작으로 끝났지만 좋은 경험이 되었습니다."
        }
        gitAddress={""}
        imgUrlArray={[
          "/PokemonProj/img/Pokemon.gif",
          "/PokemonProj/img/Pokemon1.png",
          "/PokemonProj/img/Pokemon2.png",
        ]}
        stackArray={["HTML", "CSS", "Javascript"]}
        projectLink={"/Pokemon"}
      />
      <InnerCardContainer
        title={"Hanoi"}
        text1={"하노이의 탑 알고리즘을 구현한 프로젝트입니다."}
        text2={
          "15이상의 숫자를 입력하면 15개의 링만 사용하게 구현되어있습니다."
        }
        gietAddress={""}
        imgUrlArray={["/HanoiProj/img/Hanoi.gif", "/HanoiProj/img/Hanoi.png"]}
        stackArray={["HTML", "CSS", "Javascript"]}
        projectLink={"/Hanoi"}
      />
    </ComponentBox>
  );
};

export default JavascriptComponent;

const ComponentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
`;
