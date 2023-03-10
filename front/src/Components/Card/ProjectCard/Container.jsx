import ProjectCardComponent from "./Component";

const ProjectCardContainer = ({ port, LinkBack, textAry }) => {
  return (
    <ProjectCardComponent
      port={port}
      LinkBack={LinkBack}
      textAry={textAry}
    ></ProjectCardComponent>
  );
};

export default ProjectCardContainer;
