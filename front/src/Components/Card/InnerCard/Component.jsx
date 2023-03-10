import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { action } from "../../../modules/tools";
import ImageSlider from "../../../utils/ImageSlider";

const InnerCardComponent = ({
  imgConrtrollHoverEffect,
  title,
  text1,
  text2,
  gitAddress,
  imgUrlArray,
  stackArray,
  projectLink,
}) => {
  const imgControlBox = useRef();
  const canScroll = useSelector((state) => state.tools.canScroll);

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
    <InnerCardComponentBox
      className="cyber-tile fg-dark bg-yellow mr-4 inline-block"
      canScroll={canScroll}
    >
      <CardBannerBox>
        <TitleBox
          className="code-block fg-yellow"
          data-title={title}
        ></TitleBox>
        <StackBox className="cyber-table">
          <thead>
            <tr>
              {stackArray.map((item, index) => {
                switch (item) {
                  case "HTML":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/html.png"
                          alt=""
                        />
                      </th>
                    );
                  case "CSS":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/css.png"
                          alt=""
                        />
                      </th>
                    );
                  case "Javascript":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/javascript.png"
                          alt=""
                        />
                      </th>
                    );
                  case "AWS":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/aws.png"
                          alt=""
                        />
                      </th>
                    );
                  case "Redux":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/redux.png"
                          alt=""
                        />
                      </th>
                    );
                  case "MySQL":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/mysql.png"
                          alt=""
                        />
                      </th>
                    );
                  case "React":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/react.png"
                          alt=""
                        />
                      </th>
                    );
                  case "Typescript":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/typescript.png"
                          alt=""
                        />
                      </th>
                    );
                  case "GitHub":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/github.png"
                          alt=""
                        />
                      </th>
                    );
                  case "NodeJS":
                    return (
                      <th key={`th-${item}-${index}`}>
                        <img
                          key={`${item}-${index}`}
                          src="/img/icon/nodejs.png"
                          alt=""
                        />
                      </th>
                    );
                }
              })}
            </tr>
          </thead>
        </StackBox>
      </CardBannerBox>

      <ContentBox className="">
        <ImageSlider images={imgUrlArray} />
        <DetailBox>
          <IntroBox className="cyber-razor-bottom">{text1}</IntroBox>
          <EtcBox>{text2}</EtcBox>
          <GitAddressBox>
            <LinkBox
              display={gitAddress ? "flex" : "none"}
              className="cyber-button bg-red fg-white"
            >
              <img src="/img/icon/github.png" alt="" />
              <span className="glitchtext">깃허브 링크</span>
              <span className="tag">R25</span>
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
            </LinkBox>
            <LinkBox
              display={projectLink ? "flex" : "none"}
              className="cyber-button bg-purple fg-white"
            >
              <img src="/img/icon/link.svg" alt="" />
              <span className="glitchtext">프로젝트 링크</span>
              <span className="tag">R25</span>
              <Link
                to={projectLink}
                onClick={() => {
                  console.log("asdf");
                  dispatch(action.setInProject(true));
                }}
                onMouseEnter={(e) => {
                  dispatch(action.setCursor("focus"));
                }}
                onMouseLeave={(e) => {
                  dispatch(action.setCursor("normal"));
                }}
              >
                프로젝트 링크
              </Link>
            </LinkBox>
          </GitAddressBox>
        </DetailBox>
      </ContentBox>
    </InnerCardComponentBox>
  );
};

export default InnerCardComponent;

const InnerCardComponentBox = styled.div`
  width: 100%;
  padding-bottom: 30px;
  word-break: break-all;
  img {
    width: inherit;
    clip-path: none;
  }
`;

const TitleBox = styled.div`
  color: #0f0f0f;
  margin-left: 5%;
  margin-top: 30px;
  width: 40%;
  padding: 20px 0px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ContentBox = styled.div`
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: 94%;
  border-radius: 15px;
  padding: 15px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DetailBox = styled.div`
  margin: 30px 0;
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  text-align: left;
`;

const IntroBox = styled.div``;

const EtcBox = styled.div``;

const StackBox = styled.table`
  margin-top: 30px;
  width: 45%;
  height: 100%;
  font-size: 1.5rem;
  padding: 20px 0px;
  display: flex;

  justify-content: space-evenly;
  img {
    width: 2rem;
    height: 2rem;
  }
  th {
    border-bottom-width: 1px !important;
    box-shadow: inset 0 0 3px var(--black);
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
  flex-direction: column;
  align-items: left;
  justify-content: center;
  column-gap: 20px;
  row-gap: 30px;
  transition: all 0.3s linear;
  font-size: 0.8rem;
  a:link,
  a:visited,
  a:hover,
  a {
    display: flex;
    align-items: center;
    height: 2rem;
    text-decoration: none;
    font-weight: 600;
    color: var(--white);
    transition: font-size 0.5s;
    font-size: 0.8rem;
    cursor: none;
  }
  a:hover {
    font-size: 1rem;
    cursor: none;
  }
  img {
    height: 1.5rem;
    filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(124deg)
      brightness(111%) contrast(100%);
  }
`;

const LinkBox = styled.div`
  display: ${({ display }) => display};
  align-items: center;
  column-gap: 10px;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
