import { useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/tools";
import InnerCardComponent from "./Component";
const InnerCardContainer = () => {
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
    />
  );
};

export default InnerCardContainer;
