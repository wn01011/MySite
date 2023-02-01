import styled from "styled-components";
import FileUpload from "../FileUpLoad/FileUpload";

const AdminComponent = ({ exitBtnOnClick, cursorIdx }) => {
  return (
    <AdminBox>
      <ExitBtnBox
        onClick={(e) => {
          exitBtnOnClick(e);
        }}
        cursorIdx={cursorIdx}
      >
        <span>나가자 </span>
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
  cursor: url(${({ cursor }) => "/img/special/special" + cursor + ".png"}) 14 14,
    pointer;
  img {
    width: 25px;
  }
`;

const UploadBox = styled.div``;
