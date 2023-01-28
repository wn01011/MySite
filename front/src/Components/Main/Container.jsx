import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainComponent from "./Component";

const MainContainer = ({ sideWidth }) => {
  const { title, text } = useParams();
  const mainView = useSelector((state) => state.tools.mainView);
  return (
    <MainComponent
      sideWidth={sideWidth}
      mainView={mainView}
      route={{ title, text }}
    ></MainComponent>
  );
};

export default MainContainer;
