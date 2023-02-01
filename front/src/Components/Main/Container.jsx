import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainComponent from "./Component";

const MainContainer = ({ sideWidth, cursorIdx }) => {
  const { title, text } = useParams();
  const mainView = useSelector((state) => state.tools.mainView);
  return (
    <MainComponent
      sideWidth={sideWidth}
      mainView={mainView}
      route={{ title, text }}
      cursorIdx={cursorIdx}
    ></MainComponent>
  );
};

export default MainContainer;
