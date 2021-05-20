import React from "react";
import styled from "styled-components";
import JumbotronBg from "../images/bg/bg-lg-4.jpg";
import { Colors } from "../data/Variables";
import { ImFacebook, ImYelp } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import LogoImg from "../images/logo/logo-black.png";

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.milk};
`;
const Jumbotron = styled.section`
  height: 700px;
  max-width: 1800px;
  background: url(${JumbotronBg});
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  h1 {
    color: ${Colors.white};
    text-shadow: 0 10px 10px rgba(0, 0, 0, 1);
    font-weight: 900;
    z-index: 1;
  }
  h5 {
    color: ${Colors.gold};
    z-index: 1;
    text-shadow: 0 10px 10px rgba(0, 0, 0, 1);
    font-style: italic;
  }
`;
const AboutWrapper = styled.div`
  color: #000;
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: auto;
`;
const InfoRow = styled.div`
  display: flex;
  margin-bottom: 4rem;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const LogoWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    img {
      width: 250px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 150px;
    }
  }
`;
const Logo = styled.img``;
const CafeInfoWrapper = styled.div`
  flex-basis: 50%;
  h2 {
    margin-bottom: 2rem;
    font-weight: 900;
  }
  .grey {
    color: ${Colors.dark};
  }
  div.slogan {
    margin: 2rem 0rem;
    padding: 0.8rem 3rem;
    font-size: 1.5rem;
    border-left: 3px solid ${Colors.gold};
    display: flex;
    align-items: center;
    font-style: italic;
    p {
      margin: 0;
    }
  }
`;
const SocialMediaContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  a {
    margin-right: 1.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    color: ${Colors.dark};
    * > {
      &:hover {
        fill: ${Colors.gold};
        color: ${Colors.gold};
      }
    }
  }
`;
const Facebook = styled(ImFacebook)``;
const Instagram = styled(FiInstagram)``;
const Yelp = styled(ImYelp)``;
const TripAdvisor = styled(SiTripadvisor)``;
const MissionWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
const IntroWrapper = styled.div`
  margin-bottom: 2rem;
  h1,
  h4 {
    font-weight: 900;
    margin-bottom: 2rem;
  }

  h4 {
    text-align: center;
  }
`;
const BodyWrapper = styled.div`
  h4 {
    font-weight: 900;
    text-align: center;
    margin-bottom: 2rem;
  }
  h5 {
    font-weight: 900;
  }
  p {
    margin-bottom: 1.5rem;
  }
`;

const About = () => {
  return (
    <Page>
      <Jumbotron>
        <h1>ABOUT US - IMPRESSO CAFE</h1>
        <h5>The best coffee in the city.</h5>
      </Jumbotron>
      <AboutWrapper>
        <InfoRow>
          <LogoWrapper>
            <Logo src={LogoImg} />
          </LogoWrapper>
          <CafeInfoWrapper>
            <h2>IMPRESSO CAFE</h2>
            <p>
              <b>Impresso Cafe</b>{" "}
              <span className="grey">
                is located in at 836 Park Ct Drayton Valley, Alberta.
              </span>
            </p>
            <div className="slogan">
              <p>Rest, Relax, Revive...</p>
            </div>
            <p className="grey">
              Impresso is a family owned and operated coffee shop which provides
              a small town experience with big city appeal. It’s warm and
              friendly environment provides an excellent atmosphere to enjoy a
              great cup of coffee or sandwich, hang with friends, or do a bit of
              work using the FREE WiFi.
            </p>
            <p className="grey">Stop in today. We’d love to see ya …</p>
            <SocialMediaContainer>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a href="https://www.yelp.com/" target="_blank" rel="noreferrer">
                <Yelp />
              </a>
              <a
                href="https://www.tripadvisor.com/"
                target="_blank"
                rel="noreferrer"
              >
                <TripAdvisor />
              </a>
            </SocialMediaContainer>
          </CafeInfoWrapper>
        </InfoRow>
        <MissionWrapper>
          <IntroWrapper>
            <h1>OUR MISSION STATEMENT</h1>
            <h4>IMPRESSO - PEOPLE OVER PROFITS</h4>
            <p>
              We will prioritize people more than the profits. Profits will come
              if people come first.
            </p>
            <p>
              <strong>Our Mission: </strong>To provide the most inviting
              atmosphere in the industry by giving exceptional customer service
              and hospitality to all of our customers as we serve them quality
              food and drinks.
            </p>
          </IntroWrapper>
          <BodyWrapper>
            <h4>OUR 4 C'S OF FOCUS</h4>
            <div>
              <h5>1. Cleanliness</h5>
              <p>
                We will make cleanliness a priority for the purpose of giving
                our customers a comfortable and clean place to gather and our
                colleagues a sanitary place to serve and work.
              </p>
              <h5>2. Customers</h5>
              <p>
                We will do all we can to make sure our customers are welcomed
                and treated with dignity and respect. Our goal is to make them
                feel important and they leave feeling better than when they came
                in.
              </p>
              <h5>3. Colleagues</h5>
              <p>
                We will treat each colleague as a family member, with care and
                compassion. We will do our best to encourage each other and
                create an environment that we enjoy coming to.
              </p>
              <h5>4. Community</h5>
              <p>
                We will participate and support the community we do business in
                through sponsorships, volunteering, donations and leadership
                opportunities.
              </p>
            </div>
          </BodyWrapper>
        </MissionWrapper>
      </AboutWrapper>
    </Page>
  );
};

export default About;
