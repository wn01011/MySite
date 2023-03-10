import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { action } from "../../../../../modules/tools";
import iframeComp from "../../../../../utils/iframeComp";

const PokemonComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <PositionBox>
      <IframeCompBox
        dangerouslySetInnerHTML={iframeComp({
          src: "http://3.36.91.10:9000",
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
      <ReferenceBox className="cyber-razor-bottom bg-black">
        <h1 className="cyber-h">
          <span>게임 방식</span>
        </h1>
        <ul>
          <li>
            <div>
              <div>
                주의 사항 : 게임자체가 반응형 고려가 전혀 없기 때문에 화면
                크기를 맞춰서 플레이 해주셔야합니다.
              </div>
              <div>
                화면상단에 출력되는 텍스트를 참조하여 플레이해주시면 됩니다.
              </div>
              <div>
                게임의 완성이 목적이 아닌 월드와 캐릭터간의 충돌 구현등 예전
                Unity를 다뤘을 때 썼던 기능들을 웹에서 구현해보자한
                프로젝트였습니다.
              </div>
              <div>게임형식이긴 하지만 게임은 아닙니다.</div>
            </div>
          </li>
        </ul>
      </ReferenceBox>
    </PositionBox>
  );
};

export default PokemonComponent;

const PositionBox = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  overflow: hidden;
`;

const IframeCompBox = styled.div`
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
  background-color: var(--black);
  color: var(--white);
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
    background-color: var(--white);
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
