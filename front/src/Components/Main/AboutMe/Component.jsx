import styled from "styled-components";

const AboutMeComponent = () => {
  return (
    <AboutMeComponentBox>
      <IntroBox>
        <p>새로운 도전을 어쩌구</p>
        <img src="/img/orangeBrush.svg" alt="" />
      </IntroBox>
      <DetailBox>
        <div className="detailRow">
          <div>
            <img src="/img/name.svg" alt="" />
            <p>Name</p>
            <p>김정규</p>
          </div>
          <div>
            <img src="/img/email.svg" alt="" />
            <p>E-mail</p>
            <p>wn010111@gmail.com</p>
          </div>
          <div>
            <img src="/img/house.png" alt="" />
            <p>Address</p>
            <p>일하는곳 주변</p>
          </div>
          <div>
            <img src="/img/education.png" alt="" />
            <p>Education</p>
            <p>성균관대학교 중퇴</p>
          </div>
        </div>
        <div className="detailRow">
          <div>
            <img src="/img/phone.png" alt="" />
            <p>Phone</p>
            <p>010-8506-7867</p>
          </div>
          <div>
            <img src="/img/github.png" alt="" />
            <p>GitHub</p>
            <p>
              <a href="https://github.com/wn01011" target={"_blank"}>
                {"->링크<-"}
              </a>
            </p>
          </div>
        </div>
      </DetailBox>
      <SkillBox> </SkillBox>
    </AboutMeComponentBox>
  );
};

export default AboutMeComponent;

const AboutMeComponentBox = styled.div`
  width: "800px";
  cursor: url("/img/normal/cursor1.svg"), auto;
`;

const IntroBox = styled.div`
  font-size: 3rem;
  padding: 150px 0px;
  width: 100%;
  background-color: #ffd4d4;
  border-radius: 15px;
  img {
    height: 150px;
    transform: translateY(-60px) scaleX(1.2);
    opacity: 0.8;
  }
  /* p::before {
    content: " ";
    width: 40%;
    height: 20%;
    position: absolute;
    transform: translateY(0px);
    background-image: url("/img/orangeBrush.svg");
    background-size: 100% 100%;
    background-position: 0px 0px;
    background-repeat: no-repeat;
  } */
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 150px;
  width: 100%;
  padding: 150px 0px;
  justify-content: space-evenly;
  background-color: khaki;
  border-radius: 15px;
  font-weight: 600;
  .detailRow {
    display: flex;
    justify-content: space-evenly;
  }
  img {
    width: 80px;
    height: 80px;
  }
  a {
    color: #5e7042;
    text-decoration: none;
    outline: none;
    transition: font-size 0.5s;
  }

  a:hover,
  a:active {
    font-size: 1.5rem;
    text-decoration: none;
    color: #aacb73;
  }
`;

const SkillBox = styled.div``;
