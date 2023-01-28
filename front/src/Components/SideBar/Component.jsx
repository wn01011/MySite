import styled from "styled-components";
import ContentBoxContainer from "./ContentBox/Container";

const SideBarComponent = ({
  sideBtnOnClick,
  sideWidth,
  adminPasswordOnClick,
  titleImg,
}) => {
  return (
    <SideBarSliderBox>
      <SideBarBox sideWidth={sideWidth}>
        <AdminBox
          sideWidth={sideWidth}
          onClick={(e) => {
            adminPasswordOnClick(e);
          }}
        >
          <img src="/img/gear-solid.svg" alt="" />
        </AdminBox>
        <SideBarBtnBox>
          <SideBarBtn onClick={() => sideBtnOnClick()} sideWidth={sideWidth}>
            <img src="/img/leftArrow.svg" alt="" />
          </SideBarBtn>
        </SideBarBtnBox>

        <ProfileBox sideWidth={sideWidth}>
          <img src={`/${titleImg || "img/cat.png"}`} alt="" />
        </ProfileBox>

        <ContentBoxContainer />
      </SideBarBox>
    </SideBarSliderBox>
  );
};

export default SideBarComponent;

const SideBarSliderBox = styled.div``;
const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.sideWidth}px;
  transition: all 0.3s linear;
  position: ${({ sideWidth }) => (sideWidth < 200 ? "sticky" : "sticky")};
`;
const SideBarBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
const SideBarBtn = styled.div`
  width: 20px;
  height: 20px;
  transform: scaleX(${({ sideWidth }) => (sideWidth < 200 ? -1 : 1)});
  img {
  }
  :hover {
    img {
      animation: hover-animation 0.8s ease-out forwards infinite;
      transition: filter 0.15s linear;
      filter: invert(89%) sepia(20%) saturate(668%) hue-rotate(304deg)
        brightness(102%) contrast(101%);
    }
  }

  @keyframes hover-animation {
    from {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-10px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

const ProfileBox = styled.div`
  display: ${(props) => (props.sideWidth >= 100 ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
  }
  margin-bottom: 10px;
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
  :hover {
    img {
      transition: filter 0.15s linear;
      filter: invert(89%) sepia(20%) saturate(668%) hue-rotate(304deg)
        brightness(102%) contrast(101%);
    }
  }
`;
