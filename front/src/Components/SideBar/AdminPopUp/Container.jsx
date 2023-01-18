import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AdminPopUpComponent from "./Component";

const AdminPopUpContainer = ({ setAdminPasswordOn }) => {
  const [password, setPassword] = useState("");
  const navigator = useNavigate();
  useEffect(() => {
    if (password == "rlawjdrb") {
      setPassword("");
      setAdminPasswordOn(false);
      navigator("/admin");
    }
  }, [password]);
  const onInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const exitPasswordOnClick = () => {
    setAdminPasswordOn(false);
  };

  return (
    <AdminPopUpComponent
      password={password}
      onInputPassword={onInputPassword}
      exitPasswordOnClick={exitPasswordOnClick}
    ></AdminPopUpComponent>
  );
};

export default AdminPopUpContainer;
