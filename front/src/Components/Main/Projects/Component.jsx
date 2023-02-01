import styled from "styled-components";

import InnerCardContainer from "../../Card/InnerCard/Container";

const ProjectsComponent = () => {
  return (
    <ProjectsComponentBox>
      <InnerCardContainer></InnerCardContainer>
    </ProjectsComponentBox>
  );
};

export default ProjectsComponent;

const ProjectsComponentBox = styled.div`
  display: flex;
  justify-content: center;
`;
