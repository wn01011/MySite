import styled from "styled-components";

const SideBarComponent = ({
  sideBtnOnClick,
  sideWidth,
  adminPasswordOnClick,
  titleImg,
}) => {
  return (
    <SideBarBox sideWidth={sideWidth}>
      <AdminBox
        sideWidth={sideWidth}
        onClick={(e) => {
          adminPasswordOnClick(e);
        }}
      >
        <img src="/img/gear-solid.svg" alt="gd" />
      </AdminBox>
      <SideBarBtnBox>
        <SideBarBtn onClick={() => sideBtnOnClick()}>
          사이드바 축소 버튼
        </SideBarBtn>
      </SideBarBtnBox>

      <ProfileBox sideWidth={sideWidth}>
        <img src={`/${titleImg || "img/cat.png"}`} alt="" />
      </ProfileBox>
    </SideBarBox>
  );
};

export default SideBarComponent;

const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.sideWidth}px;
`;
const SideBarBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
const SideBarBtn = styled.button``;

const ProfileBox = styled.div`
  display: ${(props) => (props.sideWidth >= 100 ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
  }
  border-bottom: 1px solid black;
`;

const AdminBox = styled.div`
  display: ${(props) => (props.sideWidth >= 100 ? "block" : "none")};
  position: absolute;
  left: 10px;
  top: 10px;
  width: 25px;
  color: #4b4b4b;
  img {
    filter: invert(25%) sepia(36%) saturate(0%) hue-rotate(234deg)
      brightness(101%) contrast(88%);
  }
`;
