import { useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/tools";
import InnerCardComponent from "./Component";
const InnerCardContainer = ({
  title,
  text1,
  text2,
  gitAddress,
  imgUrlArray,
  stackArray,
  projectLink,
}) => {
  const [imgIdx, setImgIdx] = useState(0);
  const dispatch = useDispatch();

  const imgIdxClickFunc = (_dir, _idx) => {
    if (_idx) {
      setImgIdx(_idx);
      return;
    }
    switch (imgIdx) {
      case 0:
        if (_dir === "left") {
          setImgIdx(2);
        } else {
          setImgIdx(1);
        }
        break;
      case 1:
        if (_dir === "left") {
          setImgIdx(0);
        } else {
          setImgIdx(2);
        }
        break;
      case 2:
        if (_dir === "left") {
          setImgIdx(1);
        } else {
          setImgIdx(0);
        }
        break;
    }
  };

  const imgConrtrollHoverEffect = (_in) => {
    if (_in) dispatch(action.setCursor("focus"));
    else dispatch(action.setCursor("normal"));
  };

  return (
    <InnerCardComponent
      imgIdxClickFunc={imgIdxClickFunc}
      imgIdx={imgIdx}
      imgConrtrollHoverEffect={imgConrtrollHoverEffect}
      title={title}
      text1={text1}
      text2={text2}
      gitAddress={gitAddress}
      imgUrlArray={imgUrlArray}
      stackArray={stackArray}
      projectLink={projectLink}
    />
  );
};

export default InnerCardContainer;
