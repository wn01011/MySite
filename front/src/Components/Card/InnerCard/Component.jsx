import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { action } from "../../../modules/tools";

const InnerCardComponent = ({
  imgIdxClickFunc,
  imgIdx,
  imgConrtrollHoverEffect,
  title,
  text1,
  text2,
  gitAddress,
  imgUrlArray,
  stackArray,
}) => {
  const imgControlBox = useRef();
  useEffect(() => {
    if (imgControlBox.current) {
      [...imgControlBox.current.children].forEach((item) => {
        item.onmouseenter = () => {
          imgConrtrollHoverEffect(true);
        };
        item.onmouseleave = () => {
          imgConrtrollHoverEffect(false);
        };
      });
    }
  }, [imgControlBox]);

  const dispatch = useDispatch();

  return (
    <InnerCardComponentBox>
      <CardBannerBox>
        <TitleBox>{title}</TitleBox>
        <StackBox>
          {stackArray.map((item) => {
            switch (item) {
              case "HTML":
                break;
              case "CSS":
                break;
              case "Javascript":
                break;
            }
          })}
          <img src="/img/icon/html.png" alt="" />
          <img src="/img/icon/css.png" alt="" />
          <img src="/img/icon/javascript.png" alt="" />
        </StackBox>
      </CardBannerBox>

      <ContentBox>
        <PreviewBox>
          <ImgBox>
            <img src={imgUrlArray[imgIdx]} alt="" />
          </ImgBox>
          <ControlBox ref={imgControlBox}>
            <div
              onClick={() => {
                imgIdxClickFunc("left");
              }}
            >
              <img src="/img/leftArrow.svg" alt="" />
            </div>
            <div
              onClick={() => {
                imgIdxClickFunc("left", 0);
              }}
            >
              <img
                src={imgIdx == 0 ? "/img/dot.svg" : "/img/blankDot.svg"}
                alt=""
              />
            </div>
            <div
              onClick={() => {
                imgIdxClickFunc("left", 1);
              }}
            >
              <img src={imgIdx == 1 ? "/img/dot.svg" : "/img/blankDot.svg"} />
            </div>
            <div
              onClick={() => {
                imgIdxClickFunc("left", 2);
              }}
            >
              <img src={imgIdx == 2 ? "/img/dot.svg" : "/img/blankDot.svg"} />
            </div>
            <div
              onClick={() => {
                imgIdxClickFunc("right");
              }}
            >
              <img src="/img/rightArrow.svg" alt="" />
            </div>
          </ControlBox>
        </PreviewBox>
        <DetailBox>
          <IntroBox>{text1}</IntroBox>
          <EtcBox>{text2}</EtcBox>
          <GitAddressBox>
            <img src="/img/icon/github.png" alt="" />
            <a
              href={gitAddress}
              target={"_blank"}
              onMouseEnter={(e) => {
                dispatch(action.setCursor("focus"));
              }}
              onMouseLeave={(e) => {
                dispatch(action.setCursor("normal"));
              }}
            >
              {"깃허브 링크"}
            </a>
            <img src="/img/icon/link.svg" alt="" />
            <Link to={"/FindMiddle"}>프로젝트 링크</Link>
          </GitAddressBox>
        </DetailBox>
      </ContentBox>
    </InnerCardComponentBox>
  );
};

export default InnerCardComponent;

const InnerCardComponentBox = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #cde990;
  padding-bottom: 30px;
  word-break: break-all;
`;

const TitleBox = styled.div`
  margin-left: 5%;
  margin-top: 30px;
  border-radius: 15px;
  width: 40%;
  padding: 20px 0px;
  background-color: #aacb73;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ContentBox = styled.div`
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: #aacb73;
  border-radius: 15px;
  height: 500px;
  padding: 15px;
`;

const PreviewBox = styled.div`
  width: 45%;
  position: relative;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 15px;
  padding: 30px;
  background-color: #ffffe8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 70%;
    width: fit-content;
    max-width: 100%;
  }
`;

const ControlBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  img {
    width: 15px;
  }
`;

const DetailBox = styled.div`
  margin: 30px 0;
  width: 45%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  text-align: left;
`;

const IntroBox = styled.div``;

const EtcBox = styled.div``;

const StackBox = styled.div`
  margin-top: 30px;
  background-color: #aacb73;
  width: 45%;
  height: 100%;
  font-size: 1.5rem;
  padding: 20px 0px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  img {
    height: 2rem;
  }
`;

const CardBannerBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  border: 15px;
`;

const GitAddressBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  transition: all 0.3s linear;
  a:link,
  a:visited,
  a:hover,
  a {
    text-decoration: none;
    font-weight: 600;
    color: black;
    transition: font-size 0.5s;
    cursor: none;
  }
  a:hover {
    font-size: 1.5rem;
  }
  img {
    height: 2rem;
  }
`;
