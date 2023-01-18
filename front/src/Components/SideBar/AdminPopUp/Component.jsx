import styled from "styled-components";

const AdminPopUpComponent = ({
  passWord,
  onInputPassword,
  exitPasswordOnClick,
}) => {
  return (
    <AdminPopUpBox>
      <ExitBtnBox
        onClick={() => {
          exitPasswordOnClick();
        }}
      >
        <img src="/img/xMarkBlack.svg" alt="" />
      </ExitBtnBox>
      <input
        type="password"
        value={passWord}
        onInput={(e) => {
          onInputPassword(e);
        }}
        placeholder={"비밀번호를 입력하세요"}
      />
    </AdminPopUpBox>
  );
};

export default AdminPopUpComponent;

const AdminPopUpBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8080806f;
`;

const ExitBtnBox = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 30px;
  img {
    width: 100%;
  }
`;
