import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/tools";
import iframeComp from "../../../../utils/iframeComp";
import AudioVisual from "../../../../utils/AudioVisualization/AudioVisual";
import { useEffect } from "react";

const FindMiddleComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <PositionBox>
      <ComponentBox
        dangerouslySetInnerHTML={iframeComp({
          src: "http://3.36.91.10:9001",
        })}
      ></ComponentBox>
      <Link to={"/Projects"}>
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
      <ReferenceBox className="cyber-razor-bottom bg-dark">
        <h1 className="cyber-h">** 주의점 **</h1>
        <ul>
          <li>
            <div className="code">
              <div>
                역명을 쳤을 때 주소에 지하가 붙은 지명은 API상에서 찾지 못하는
                것으로 보입니다.
              </div>
              <div>
                해당 주소를 입력하면 경고창이 하나 올라오고 정상 작동 하지
                않습니다. 가까운 다른 도로명 주소를 적어주세요
              </div>
            </div>
          </li>
        </ul>
      </ReferenceBox>
      <AudioBox>
        <AudioVisual width={250} height={250}></AudioVisual>
      </AudioBox>
    </PositionBox>
  );
};

export default FindMiddleComponent;

const PositionBox = styled.div`
  width: 90%;
  height: fit-content;
  position: relative;
  overflow: hidden;
`;
const ComponentBox = styled.div`
  height: 80vh;
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
  color: var(--cyan);
  line-height: 2rem;
  text-align: center;
  h1 {
    font-size: 2rem;
    text-align: left;
    text-indent: 2rem;
    line-height: 3rem;
    width: 50%;
  }
  h1::after {
    background-color: var(--cyan);
  }
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

const AudioBox = styled.div`
  width: 100vw;
  height: 100px;
`;
