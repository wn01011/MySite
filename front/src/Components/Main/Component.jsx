import styled from "styled-components";
import HeadNavContainer from "./HeadNav/Container";
import CardContainer from "../Card/Container";
import FindMiddleContainer from "./Projects/FindMiddle/Container";
import GenerateTreeContainer from "./Languages/CSS/GenerateTree/Container";
import FPSContainer from "./Languages/CSS/FPS/Container";
import MenuIndicatorContainer from "./Languages/CSS/MenuIndicator/Container";
import RSPContainer from "./Languages/Javascript/RSP/Container";
import PokemonContainer from "./Languages/Javascript/Pokemon/Container";
import HanoiContainer from "./Languages/Javascript/Hanoi/Container";
import CodeClearContainer from "./Projects/CodeClear/Container";
import TGTWContainer from "./Projects/TGTW/Container";
import BlockExplorerContainer from "./Blockchain/BlockExplorer/Container";
import ProjectCardContainer from "../Card/ProjectCard/Container";

const MainComponent = ({ route, innerWidth }) => {
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
        case "Blockchain":
          return <CardContainer title={"Blockchain"} />;
        case "Unity":
          return <CardContainer title={"Unity"} />;
        case "Game":
          return <CardContainer title={"Game"} />;
        case "FindMiddle":
          return (
            <ProjectCardContainer
              port={9001}
              LinkBack={"/Project"}
              textAry={[
                "역명을 쳤을 때 주소에 지하가 붙은 지명은 API상에서 찾지 못하는 것으로 보입니다.",
                "해당 주소를 입력하면 경고창이 하나 올라오고 정상 작동 하지 않습니다.\n가까운 다른 도로명 주소를 적어주세요.",
              ]}
            />
          );
        case "GenerateTree":
          return (
            <ProjectCardContainer
              port={9003}
              LinkBack={"Languages/CSS"}
              textAry={[
                "참고한 자료",
                <a
                  onClick={(e) => {
                    window.open(e.target.href);
                  }}
                  href="https://www.youtube.com/watch?v=wBAtHDdaZ2Y"
                  target={"_blank"}
                >
                  Reference : Franks laboratory
                </a>,
              ]}
            />
          );
        case "FPS":
          return (
            <ProjectCardContainer
              port={9002}
              LinkBack={"/Languages/CSS"}
              textAry={[
                `fps의 특징상 마우스가 정중앙에 고정되어야합니다. 게임화면을 한번
                클릭해주어야 고정이됩니다.`,
                `화면 외부에서 스크롤을 통해 게임화면을 중앙쪽에 맞추고
                게임화면을 클릭해주십시오.`,
                `준비가 완료되면 Enter키를 눌러 시작하시면 됩니다.`,
                `게임이 시작하면 사방에서 박스들이 등장합니다.`,
                `마우스를 움직여 박스를 중앙의 에임에 맞춰 클릭하면 상단의 점수가
                올라가게됩니다.`,
                `좌측상단의 남은 시간이 끝날때 까지 진행되며 다시 Enter키를 눌러
                시작할 수 있습니다.`,
                `만약 마우스 고정을 풀고 싶다면 ESC키를 누르면 다시 마우스가 게임
                밖으로 나오게 됩니다.`,
              ]}
            />
          );
        case "MenuIndicator":
          return (
            <ProjectCardContainer
              port={9004}
              LinkBack={"/Languages/CSS"}
              textAry={[]}
            />
          );
        case "RSP":
          return (
            <ProjectCardContainer
              port={9005}
              LinkBack={"/Languages/Javascript"}
              textAry={[
                `먼저 우측하단의 코인모양의 버튼을 눌러 돈을 넣어줍니다.`,
                `100원 이상 있을 때 하단의 묵, 찌, 빠 중 하나의 버튼을 누르면
                100원이 차감되며 가위바위보를 시작합니다.`,
                `일련의 애니메이션이 지나간후 화면에 이겼다, 비겼다, 졌다 중
                판정이 이루어지며 코인이 랜덤하게 오르게 됩니다.`,
                `코인이 다 떨어지기 힘들게 벨런스를 맞춰놓았습니다.`,
                `감사합니다.`,
              ]}
            />
          );
        case "Pokemon":
          return (
            <ProjectCardContainer
              port={9000}
              LinkBack={"/Languages/Javascript"}
              textAry={[
                `주의 사항 : 게임자체가 반응형 고려가 전혀 없기 때문에 화면
                크기를 맞춰서 플레이 해주셔야합니다.`,
                `화면상단에 출력되는 텍스트를 참조하여 플레이해주시면 됩니다.`,
                `월드와 캐릭터간의 충돌 구현등, Unity를 다뤘을 때 썼던 기능들을 웹에서 구현해보자한
                프로젝트였습니다.`,
              ]}
            />
          );
        case "Hanoi":
          return (
            <ProjectCardContainer
              port={9007}
              LinkBack={"/Languages/Javascript"}
              textAry={["링 개수를 입력한 후 엔터를 누르시면 시작됩니다."]}
            />
          );
        case "CodeClear":
          return (
            <ProjectCardContainer
              port={9998}
              LinkBack={"/Projects"}
              textAry={[
                `역명을 쳤을 때 주소에 지하가 붙은 지명은 API상에서 찾지 못하는
                것으로 보입니다.`,
                `해당 주소를 입력하면 경고창이 하나 올라오고 정상 작동 하지
                않습니다. 가까운 다른 도로명 주소를 적어주세요.`,
              ]}
            />
          );
        case "TGTW":
          return (
            <ProjectCardContainer
              port={9008}
              LinkBack={"/Projects"}
              textAry={[
                `로그인 버튼을 눌렀을때 나오는 로그인 화면에서 밑의 "아직
                회원가입을 안하셨나요"를 누르면 없는 라우터를 타게 됩니다.
                상단의 회원가입 버튼을 활용해 주시길 바랍니다.`,
                `어떤 장소에서든 "admin" 을 입력하시면 관리자 페이지로 넘어가게
                됩니다.`,
                `현재 multer 경로 설정을 잘못하여 프로필 설정의 프로필 바꾸기가
                되지 않습니다.`,
              ]}
            />
          );
        case "BlockExplorer":
          return (
            <ProjectCardContainer
              port={9009}
              LinkBack={"/Blockchain"}
              textAry={[]}
            />
          );
        default:
          return <CardContainer title={"AboutMe"} />;
      }
    }
  };
  return (
    <MainBox innerWidth={innerWidth}>
      <HeadNavContainer></HeadNavContainer>
      {MainViewDiv()}
    </MainBox>
  );
};

export default MainComponent;

const MainBox = styled.div`
  width: 100%;
  margin: ${({ innerWidth }) => (innerWidth >= 940 ? "auto" : "auto")};
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  height: 100%;
  transition: width 0.3s linear;
  overflow-x: hidden;
`;
