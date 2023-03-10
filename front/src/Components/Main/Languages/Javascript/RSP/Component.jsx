import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { action } from "../../../../../modules/tools";
import iframeComp from "../../../../../utils/iframeComp";

const RSPComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <PositionBox>
      <IframeCompBox
        dangerouslySetInnerHTML={iframeComp({
          src: "http://3.36.91.10:9005",
        })}
      ></IframeCompBox>
      <Link to={"/Languages/Javascript"}>
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
        <h1>게임 방식</h1>
        <ul>
          <li>
            <div>
              <div>먼저 우측하단의 코인모양의 버튼을 눌러 돈을 넣어줍니다.</div>
              <div>
                100원 이상 있을 때 하단의 묵, 찌, 빠 중 하나의 버튼을 누르면
                100원이 차감되며 가위바위보를 시작합니다.
              </div>
              <div>
                일련의 애니메이션이 지나간후 화면에 이겼다, 비겼다, 졌다 중
                판정이 이루어지며 코인이 랜덤하게 오르게 됩니다.
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>코인이 다 떨어지기 힘들게 벨런스를 맞춰놓았습니다.</div>
              <div>감사합니다.</div>
            </div>
          </li>
        </ul>
      </ReferenceBox>
    </PositionBox>
  );
};

export default RSPComponent;

const PositionBox = styled.div`
  width: 90%;
  height: 80vh;
  position: relative;
`;

const IframeCompBox = styled.div`
  height: 100%;
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
