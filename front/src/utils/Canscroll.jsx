import { useSelector } from "react-redux";
import { useEffect } from "react";

const CanScroll = ({ canScroll }) => {
  useEffect(() => {
    if (canScroll) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [canScroll]);
  return <></>;
};

export default CanScroll;
