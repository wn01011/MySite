import { useNavigate } from "react-router";
import AdminComponent from "./Component";

const AdminContainer = () => {
  const navigator = useNavigate();
  const exitBtnOnClick = () => {
    navigator("/");
  };

  return <AdminComponent exitBtnOnClick={exitBtnOnClick}></AdminComponent>;
};

export default AdminContainer;
