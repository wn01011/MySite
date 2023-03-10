import styled from "styled-components";

const AboutMeComponent = () => {
  return (
    <AboutMeComponentBox>
      <IntroBox className={"cyber-box bg-yellow end about-me"}>
        <p>새로운 도전을 어쩌구</p>
      </IntroBox>
      <DetailBox className={"cyber-box bg-yellow middle about-me"}>
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
        <div>
          <img src="/img/phone.png" alt="" />
          <p>Phone</p>
          <p>010-8506-7867</p>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/wn01011", "_blank");
          }}
        >
          <img src="/img/github.png" alt="" />
          <p>GitHub</p>
          <p>클릭</p>
        </div>
      </DetailBox>
      <SkillBox className="cyber-razor-bottom bg-cyan"></SkillBox>
    </AboutMeComponentBox>
  );
};

export default AboutMeComponent;

const AboutMeComponentBox = styled.div`
  width: "800px";
`;

const IntroBox = styled.div`
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  border: 2px solid var(--cyan) !important;
  border-bottom: none !important;
  clip-path: polygon(
    calc(100% - 22px) 0px,
    100% 22px,
    100% 100%,
    0px 100%,
    0% 100%,
    0 0
  ) !important;
  ::before,
  ::after {
    border: 2px solid var(--cyan) !important;
  }
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
  flex-wrap: wrap;
  row-gap: 150px;
  column-gap: 20px;
  width: 100%;
  justify-content: space-evenly;
  font-weight: 600;
  border: 2px solid var(--cyan) !important;
  border-right: 2px solid var(--cyan) !important;
  font-size: ${window.innerWidth >= 680 ? "1rem" : "0.6rem"};
  > div {
    padding: 15px 5px;
    width: 30%;
    box-shadow: inset 0 0 10px var(--white);
    :hover {
      box-shadow: inset 0 0 25px var(--cyan);
    }
    p:last-child {
      padding: 10px 0;
      font-size: 0.6rem;
    }
  }
  img {
    min-width: 25px;
    min-height: 25px;
    width: 5vw;
    height: 5vw;
    background-color: var(--white);
  }

  ::before,
  ::after {
    border: 2px solid var(--cyan) !important;
  }
`;

const SkillBox = styled.div`
  height: 50px;
`;
