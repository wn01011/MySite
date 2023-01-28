import { throttle } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { action } from "../modules/tools";

const WheelEvent = ({ bottomRef, topRef }) => {
  const mainViewArray = useSelector((state) => state.tools.mainViewArray);
  const mainView = useSelector((state) => state.tools.mainView);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  let deltaY = 0;
  const SCROLLMAXCOUNT = 2;
  let scrollCount = 0;

  const throttledScroll = useCallback(
    (e) => {
      throttle((e) => {
        if (deltaY == window.scrollY) {
          scrollCount++;
          if (scrollCount >= SCROLLMAXCOUNT) {
            scrollCount = 0;
            if (e.deltaY < 0) {
              if (mainView == mainViewArray[0]) return;
              const curViewIdx = mainViewArray?.findIndex((item) => {
                return item == mainView;
              });
              navigator(mainViewArray[curViewIdx - 1]);
              dispatch(action.setMainView(mainViewArray[curViewIdx - 1]));
              bottomRef.current?.scrollIntoView({ behavior: "smooth" });
            } else if (e.deltaY > 0) {
              if (mainView == mainViewArray[mainViewArray.length - 1]) return;
              const curViewIdx = mainViewArray.findIndex((item) => {
                return item == mainView;
              });
              navigator(mainViewArray[curViewIdx + 1]);
              dispatch(action.setMainView(mainViewArray[curViewIdx + 1]));
              topRef.current?.scrollIntoView({ behavior: "smooth" });
            }
          }
        } else {
          scrollCount = 0;
        }
        deltaY = window.scrollY;
      }, 200)(e);
    },
    [mainView]
  );

  useEffect(() => {
    window.onwheel = (e) => {
      throttledScroll(e);
    };
    // const tempWheelEvent = (e) => {
    //   throttledScroll(e);
    // };
    // window.addEventListener("wheel", tempWheelEvent);
    // return () => {
    //   window.removeEventListener("wheel", tempWheelEvent);
    // };
  }, [throttledScroll]);
};

export default WheelEvent;
