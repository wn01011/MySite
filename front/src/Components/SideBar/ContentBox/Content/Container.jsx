import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentComponent from "./Component";
import { action } from "../../../../modules/tools.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContentContainer = ({ title, text }) => {
  const mainView = useSelector((state) => state.tools.mainView);
  const [fold, setFold] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const sideWidth = useSelector((state) => state.tools.sideWidth);

  useEffect(() => {
    if (mainView) {
      navigator("/" + mainView);
    }
  }, [mainView]);

  const titleClick = (e) => {
    if (!text) {
      dispatch(action.setMainView(e.target.innerText));
    }
    dispatch(action.setMainViewArray(e.target.innerText));
  };

  const foldClick = (e) => {
    if (
      e.target.className &&
      typeof e.target.className.includes !== "undefined"
    ) {
      if (e.target.className.includes("title" || "box") && !text) return;

      if (!e.target.className.includes("text")) setFold((state) => !state);
      else {
        dispatch(action.setMainView(title + "/" + e.target.innerText));
        dispatch(action.setMainViewArray(title + "/" + e.target.innerText));
      }
    }
  };

  return (
    <ContentComponent
      title={title || "hi"}
      text={text}
      foldClick={foldClick}
      titleClick={titleClick}
      fold={fold}
      sideWidth={sideWidth}
      mainView={mainView}
    />
  );
};

export default ContentContainer;
