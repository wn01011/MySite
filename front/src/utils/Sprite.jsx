import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Sprite = ({ sprites, width, height, top, left }) => {
  const [curIdx, setCurIdx] = useState(0);
  const [curSrc, setCurSrc] = useState("");
  useEffect(() => {
    setInterval(() => {
      setCurIdx((state) => (state + 1) % sprites.length);
    }, 1500);
  }, []);
  useEffect(() => {
    if (!sprites?.length) return;
    setCurSrc(sprites[curIdx]);
  }, [curIdx]);

  useEffect(() => {
    console.log(curSrc);
  }, [curSrc]);
  return (
    <Box width={width} height={height} top={top} left={left}>
      <img src={curSrc} alt="sprite" />
    </Box>
  );
};

export default Sprite;

const Box = styled.span`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  img {
    width: 100%;
    height: 100%;
  }
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;
