import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBarComponent from "./Component";
import AdminPopUpContainer from "./AdminPopUp/Container";
import { action } from "../../modules/tools.js";

const SideBarContainer = ({ sideWidth, setSideWidth }) => {
  const dispatch = useDispatch();
  const curTitle = useSelector((state) => state.tools.titleImg);
  const [adminPasswordOn, setAdminPasswordOn] = useState(false);

  const sideBtnOnClick = () => {
    if (sideWidth !== 200) {
      dispatch(action.setSideWidth(200));
      setSideWidth(200);
    } else {
      setSideWidth(50);
      dispatch(action.setSideWidth(50));
    }
  };

  const adminPasswordOnClick = () => {
    setAdminPasswordOn((state) => {
      return !state;
    });
  };

  return (
    <>
      <SideBarComponent
        sideWidth={sideWidth}
        sideBtnOnClick={sideBtnOnClick}
        adminPasswordOnClick={adminPasswordOnClick}
        // titleImg={titleImg}
        titleImg={curTitle}
      />
      {adminPasswordOn ? (
        <AdminPopUpContainer setAdminPasswordOn={setAdminPasswordOn} />
      ) : (
        <></>
      )}
    </>
  );
};

export default SideBarContainer;
