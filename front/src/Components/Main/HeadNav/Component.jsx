import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { action } from "../../../modules/tools";

const HeadNavComponent = () => {
  const tools = useSelector((state) => state.tools);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const curIdx = tools.mainViewArray.findIndex(
    (item) => item == tools.mainView
  );

  return (
    <HeadNavBox>
      <NavBeltBox curIdx={curIdx}>
        {tools.mainViewArray.map((item, index) => {
          return (
            <span
              className={
                index == 0
                  ? "cyber-box start"
                  : index == tools.mainViewArray.length - 1
                  ? "cyber-box end"
                  : "cyber-box middle"
              }
              key={`${item}-${index}`}
              onClick={() => {
                navigator("/" + item);
              }}
              onMouseEnter={() => {
                dispatch(action.setCursor("special"));
              }}
              onMouseLeave={() => {
                dispatch(action.setCursor("normal"));
              }}
            >
              <div className="glowing-text-orange">
                {item.split("/")[1] ? item.split("/")[1] : item.split("/")[0]}
              </div>
            </span>
          );
        })}
      </NavBeltBox>
    </HeadNavBox>
  );
};

export default HeadNavComponent;

const HeadNavBox = styled.div`
  width: 100%;
  height: 150px;
  overflow-x: hidden;
  background-color: black;
`;

const NavBeltBox = styled.div`
  width: 33.3vw * 8;
  display: flex;
  justify-content: left;
  position: absolute;
  transition: left 0.3s;
  left: ${({ curIdx }) => {
    if (curIdx == -1) curIdx = 0;
    return (1 - curIdx) * 33.3 + "vw";
  }};
  background: linear-gradient(
    90deg,
    var(--yellow),
    var(--banner-color1),
    var(--banner-color4),
    var(--yellow)
  );
`;
