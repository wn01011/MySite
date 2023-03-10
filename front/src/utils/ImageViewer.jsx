import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { action } from "../modules/tools";

const ImageViewer = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [diff, setDiff] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      dispatch(action.setCanScroll(false));
    } else {
      dispatch(action.setCanScroll(true));
    }
  }, [isOpen]);

  function OpenModal(e) {
    setIsOpen(true);
    const elemMiddleY =
      window.scrollY -
      window.innerHeight / 2 +
      (e.target.getBoundingClientRect().top +
        e.target.getBoundingClientRect().bottom) /
        2;
    setDiff(elemMiddleY + window.innerHeight - document.body.scrollHeight);
    console.log(
      window.scrollY + e.target.getBoundingClientRect().bottom,
      diff,
      elemMiddleY
    );
    window.scrollTo(0, elemMiddleY);
  }

  return (
    <>
      <StyledImage
        src={src}
        alt={alt}
        onClick={(e) => {
          OpenModal(e);
        }}
        onTouchEnd={(e) => {
          OpenModal(e);
        }}
        onMouseEnter={() => {
          dispatch(action.setCursor("focus"));
        }}
        onMouseLeave={() => {
          dispatch(action.setCursor("normal"));
        }}
      />
      {isOpen && (
        <StyledOverlay
          onClick={() => setIsOpen(false)}
          className={"cyber-glitch-1"}
        >
          <StyledImageInOverlay src={src} alt={alt} diff={diff} />
        </StyledOverlay>
      )}
    </>
  );
};

export default ImageViewer;

const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  z-index: 100;
`;

const StyledImageInOverlay = styled.img`
  margin-top: ${({ diff }) =>
    diff < 0
      ? `calc(${window.innerHeight / 2}px - 20%)`
      : `calc(${window.innerHeight / 2}px - 10%)`};
  max-width: 80%;
  max-height: 80%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;
