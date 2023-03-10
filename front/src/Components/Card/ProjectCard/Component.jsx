import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/tools";
import iframeComp from "../../../utils/iframeComp";
import AudioVisual from "../../../utils/AudioVisualization/AudioVisual";
import { useEffect } from "react";

const ProjectCardComponent = ({ port, LinkBack, textAry = [] }) => {
  console.log(port);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setInProject(true));
  }, []);

  return (
    <PositionBox>
      <ComponentBox
        dangerouslySetInnerHTML={iframeComp({
          src: `http://3.36.91.10:${port}`,
        })}
      ></ComponentBox>
      <Link to={LinkBack}>
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
        {textAry.length ? <h1 className="cyber-h">** 주의점 **</h1> : <></>}
        <ul>
          <li>
            <div className="code">
              {textAry.map((item, index) => {
                return <div key={`${item}-${index}`}>{item}</div>;
              })}
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

export default ProjectCardComponent;

const PositionBox = styled.div`
  width: 90%;
  height: fit-content;
  position: relative;
  overflow: hidden;
`;
const ComponentBox = styled.div`
  height: 80vh;
  background-color: var(--white);
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
  a {
    color: #5e7042;
    text-decoration: none;
    outline: none;
    transition: font-size 0.5s;
  }

  a:hover,
  a:active {
    font-size: 1rem;
    text-decoration: none;
    color: #aacb73;
    cursor: none;
  }
`;

const AudioBox = styled.div`
  width: 100vw;
  height: 100px;
`;
