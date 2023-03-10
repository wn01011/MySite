import styled from "styled-components";

import InnerCardContainer from "../../Card/InnerCard/Container";

const ProjectsComponent = () => {
  return (
    <ProjectsComponentBox>
      <InnerCardContainer
        title={"중간에서 만나요"}
        text1={
          "두 사람이 만날때 편하게 장소를 정할 수 있게 만들어주는 어플을 만들어봤습니다.\n중간지점을 위경도 상으로 표기한 후 그 주변의 핫플레이스를 지도 API의 기능을 이용해 추출한 후 마커로 지도상에 표시하고 길을 표기해줬습니다."
        }
        text2={
          "여러 Open API들을 처음 사용해 볼 수 있는 프로젝트였고 똑같은 기능의 다양한 API를 비교하여 쓰기 편하고 나의 프로젝트에 맞는 api를 찾아 쓰는 경험을 해 볼 수 있어 좋았습니다."
        }
        gitAddress={"https://github.com/wn01011/FindMiddle"}
        imgUrlArray={[
          "/img/findMiddle.png",
          "/img/findMiddle2.png",
          "/img/findMiddle3.png",
        ]}
        stackArray={["HTML", "CSS", "Javascript"]}
        projectLink={"/FindMiddle"}
      ></InnerCardContainer>
      <InnerCardContainer
        title={"Code Clear"}
        text1={"Market Curley를 참조하여 만들어본 4인팀 프로젝트입니다."}
        text2={
          "처음 웹 팀 프로젝트를 진행해본 프로젝트입니다. \n형상관리 방법, 스케쥴 조정 등 팀장으로써 미흡한점이 많았지만 프로젝트 완성이라는 목표를 두고 같이 달리는 좋은 경험이 되었습니다."
        }
        gitAddress={"https://github.com/wn01011/codeClear"}
        imgUrlArray={[
          "/CodeClear/img/CodeClear1.png",
          "/CodeClear/img/CodeClear2.png",
          "/CodeClear/img/CodeClear3.png",
          "/CodeClear/img/CodeClear4.png",
        ]}
        stackArray={["HTML", "CSS", "Javascript", "NodeJS", "MySQL"]}
        projectLink={"CodeClear"}
      ></InnerCardContainer>
      <InnerCardContainer
        title={"TGTW"}
        text1={"오늘의 집을 참조하여 만들어본 4인 팀프로젝트입니다."}
        text2={"React를 사용해 만들어본 프로젝트입니다."}
        gitAddress={"https://github.com/wn01011/TGTW"}
        imgUrlArray={[
          "/TGTW/img/SearchSystem.gif",
          "/TGTW/img/RankSystem.gif",
          "/TGTW/img/TGTW1.png",
          "/TGTW/img/TGTW2.png",
          "/TGTW/img/TGTW3.png",
          "/TGTW/img/TGTW4.png",
          "/TGTW/img/TGTW5.png",
          "/TGTW/img/TGTW6.png",
          "/TGTW/img/DB.png",
        ]}
        stackArray={["React", "Javascript", "NodeJS", "MySQL", "Redux"]}
        projectLink={"TGTW"}
      ></InnerCardContainer>
    </ProjectsComponentBox>
  );
};

export default ProjectsComponent;

const ProjectsComponentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
`;
