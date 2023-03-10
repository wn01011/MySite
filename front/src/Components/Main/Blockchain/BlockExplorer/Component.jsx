import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/tools";
import iframeComp from "../../../../utils/iframeComp";
import { useEffect } from "react";

const BlockExplorerComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <PositionBox>
      <ComponentBox
        dangerouslySetInnerHTML={iframeComp({ src: "http://3.36.91.10:9009" })}
      ></ComponentBox>
      <Link to={"/Blockchain"}>
        <BackBtnBox
          onMouseEnter={() => {
            dispatch(action.setCursor("special"));
          }}
          onMouseLeave={() => {
            dispatch(action.setCursor("normal"));
          }}
        >
          <img src="/img/leftArrow.svg" alt="" />
        </BackBtnBox>
      </Link>
      <ReferenceBox>
        <h1>** 공지 **</h1>
        <ul>
          <li>
            <div>
              <div>
                로그인 버튼을 눌렀을때 나오는 로그인 화면에서 밑의 `아직
                회원가입을 안하셨나요`를 누르면 없는 라우터를 타게 됩니다.
                상단의 회원가입 버튼을 활용해 주시길 바랍니다.
              </div>
              <div>
                어떤 장소에서든 "admin" 을 입력하시면 관리자 페이지로 넘어가게
                됩니다.
              </div>
              <div>
                현재 multer 경로 설정을 잘못하여 프로필 설정의 프로필 바꾸기가
                되지 않습니다.
              </div>
            </div>
          </li>
        </ul>
      </ReferenceBox>
    </PositionBox>
  );
};

export default BlockExplorerComponent;

const PositionBox = styled.div`
  width: 90%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ComponentBox = styled.div`
  height: 100%;
  overflow: auto;
  overflow-x: none;
  -webkit-overflow-scrolling: touch;
`;

const BackBtnBox = styled.div`
  cursor: none;
  position: absolute;
  left: -50px;
  top: 0px;
  width: 50px;
  height: 50px;
  img {
    animation: bling-bling 0.8s ease-out forwards infinite;
  }
  :hover {
    img {
      animation: hover-animation 0.8s ease-out forwards infinite;
      transition: filter 0.15s linear;
      filter: invert(89%) sepia(20%) saturate(668%) hue-rotate(304deg)
        brightness(102%) contrast(101%);
    }
  }
  @keyframes bling-bling {
    from {
    }
    50% {
      filter: invert(89%) sepia(20%) saturate(668%) hue-rotate(304deg)
        brightness(102%) contrast(101%);
    }
    to {
    }
  }
`;

const ReferenceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  background-color: #ffffe8;
  line-height: 2rem;
  text-align: center;
  ul {
    padding: 20px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    list-style: none;
    li {
      padding: 10px 0px;
    }
  }
`;
