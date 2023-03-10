import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainComponent from "./Component";

const MainContainer = ({ cursorIdx, innerWidth }) => {
  const { title, text } = useParams();
  const mainView = useSelector((state) => state.tools.mainView);
  return (
    <MainComponent
      mainView={mainView}
      route={{ title, text }}
      cursorIdx={cursorIdx}
      innerWidth={innerWidth}
    ></MainComponent>
  );
};

export default MainContainer;
