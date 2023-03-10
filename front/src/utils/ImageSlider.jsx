import React, { useState } from "react";
import styled from "styled-components";
import ImageViewer from "./ImageViewer";
import { useDispatch } from "react-redux";
import { action } from "../modules/tools";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(action.setCursor("special"));
  };
  const onMouseLeave = () => {
    dispatch(action.setCursor("normal"));
  };
  const previousSlide = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  const nextSlide = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <StyledSlider className="fg-white bg-dark mr-4 inline-block vt-bot">
      {images.map((image, index) => (
        <StyledSlide
          key={image}
          style={{
            display: index === currentImageIndex ? "flex" : "none",
          }}
        >
          <ImageViewer src={image} />
        </StyledSlide>
      ))}
      <ArrowLeft
        onClick={previousSlide}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={"glowing-text"}
      >
        <span>&lt;</span>
      </ArrowLeft>
      <ArrowRight
        onClick={nextSlide}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={"glowing-text"}
      >
        <span>&gt;</span>
      </ArrowRight>
    </StyledSlider>
  );
};
const StyledSlider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  img {
    height: 400px;
  }
`;
const StyledSlide = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledArrow = styled.div`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  font-weight: 600;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3vw;
  height: 3vw;
  span {
    width: 100%;
  }

  color: #fff;
`;
const ArrowLeft = styled(StyledArrow)`
  left: 10px;
`;
const ArrowRight = styled(StyledArrow)`
  right: 10px;
`;
export default ImageSlider;
