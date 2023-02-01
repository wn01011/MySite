import { useEffect } from "react";
import FindMiddleComponent from "./Component";

const FindMiddleContainer = () => {
  useEffect(() => {
    window.onwheel = (e) => {
      e.preventDefault();
    };
  }, []);

  return <FindMiddleComponent></FindMiddleComponent>;
};

export default FindMiddleContainer;
