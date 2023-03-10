import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { action } from "../../../../../modules/tools";
import iframeComp from "../../../../../utils/iframeComp";
import { useEffect } from "react";

const FPSComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <FPSPositionBox>
      <FPSComponentBox
        dangerouslySetInnerHTML={iframeComp({
          src: "http://3.36.91.10:9002",
        })}
      ></FPSComponentBox>
      <Link to={"/Languages/CSS"}>
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
              <div>
                fps의 특징상 마우스가 정중앙에 고정되어야합니다. 게임화면을 한번
                클릭해주어야 고정이됩니다.
              </div>
              <div>
                화면 외부에서 스크롤을 통해 게임화면을 중앙쪽에 맞추고
                게임화면을 클릭해주십시오.
              </div>
              <div>준비가 완료되면 Enter키를 눌러 시작하시면 됩니다.</div>
            </div>
          </li>
          <li>
            <div>
              <div>게임이 시작하면 사방에서 박스들이 등장합니다.</div>
              <div>
                마우스를 움직여 박스를 중앙의 에임에 맞춰 클릭하면 상단의 점수가
                올라가게됩니다.
              </div>
              <div>
                좌측상단의 남은 시간이 끝날때 까지 진행되며 다시 Enter키를 눌러
                시작할 수 있습니다.
              </div>
              <div>
                만약 마우스 고정을 풀고 싶다면 ESC키를 누르면 다시 마우스가 게임
                밖으로 나오게 됩니다.
              </div>
            </div>
          </li>
        </ul>
      </ReferenceBox>
    </FPSPositionBox>
  );
};

export default FPSComponent;

const FPSPositionBox = styled.div`
  width: 90%;
  height: 80vh;
  position: relative;
`;

const FPSComponentBox = styled.div`
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
