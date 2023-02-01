import { useNavigate } from "react-router";
import AdminComponent from "./Component";

const AdminContainer = ({ cursorIdx }) => {
  const navigator = useNavigate();
  const exitBtnOnClick = () => {
    navigator("/");
  };

  return (
    <AdminComponent
      exitBtnOnClick={exitBtnOnClick}
      cursorIdx={cursorIdx}
    ></AdminComponent>
  );
};

export default AdminContainer;
