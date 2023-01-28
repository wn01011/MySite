import styled from "styled-components";

const ContentComponent = ({
  title,
  text,
  fold,
  foldClick,
  titleClick,
  sideWidth,
  mainView,
}) => {
  return (
    <ContentBox
      className="box"
      onClick={(e) => {
        if (sideWidth < 200) return;
        foldClick(e);
        titleClick(e);
      }}
      fold={fold}
      mainView={mainView}
      title={title}
    >
      <TitleDiv text={text} fold={fold} className="title" onClick={(e) => {}}>
        {sideWidth >= 200 ? title : ""}
      </TitleDiv>
      {Array.isArray(text) && sideWidth >= 200 ? (
        text.map((item, index) => {
          return (
            <TextBox
              fold={fold}
              key={`Side-Content-Box-list-${index}`}
              className="text"
            >
              {item}
            </TextBox>
          );
        })
      ) : (
        <></>
      )}
    </ContentBox>
  );
};

const ContentBox = styled.div`
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 100%;
  padding: 20px 0px;
  background-color: ${({ fold, mainView, title }) =>
    mainView.split("/")[0] == title ? "#ffd4d4" : "#cde990"};
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background-color: ${({ fold }) => (fold ? "#AACB73" : "#CDE990")};
    color: #ffffe8;
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  font-weight: 600;
  margin-bottom: ${({ text, fold }) => (text && !fold ? "20px" : 0)};
`;

const TextBox = styled.div`
  color: black;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ffffe8;
  transition: "all .5s ease";
  display: ${({ fold }) => (fold ? "none" : "block")};
  font-size: 0.8rem;
  :hover {
    background-color: #aacb73;
    color: #ffffe8;
    transition: background-color 200ms linear, color 200ms ease;
  }
`;

export default ContentComponent;
