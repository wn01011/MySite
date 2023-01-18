import styled from "styled-components";
import FileUpload from "../FileUpLoad/FileUpload";

const AdminComponent = ({ exitBtnOnClick }) => {
  return (
    <AdminBox>
      <ExitBtnBox
        onClick={(e) => {
          exitBtnOnClick(e);
        }}
      >
        <span>나가자</span>
        <img src="/RankSystem.gif" />
        <img src="/img/rightExit.svg" alt="" />
      </ExitBtnBox>
      <UploadBox>
        <FileUpload></FileUpload>
      </UploadBox>
      adminPage입니다.
    </AdminBox>
  );
};

export default AdminComponent;

const AdminBox = styled.div`
  width: 100%;
`;

const ExitBtnBox = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  top: 20px;
  img {
    width: 25px;
  }
`;

const UploadBox = styled.div``;
