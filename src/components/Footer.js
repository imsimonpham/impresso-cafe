import React from "react";
import styled from "styled-components/macro";
import { Colors } from "../data/Variables";
import { Link } from "react-router-dom";
import { ImFacebook, ImYelp } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";

const Section = styled.section`
  min-height: 45vh;
  background: #0f0f0f;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  margin: auto;
  padding-top: 4rem;
`;
const WrapperTop = styled.div`
  max-width: 1300px;
  margin: auto;
`;
const WrapperBottom = styled.div`
  background: ${Colors.black};
`;
const FooterTop = styled.div`
  min-height: calc(45vh * 0.7);
  padding: 0rem 2rem 0rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 3rem;
  & > div {
    flex-basis: 23%;
    text-align: left;
    height: 340px;

    h5 {
      margin-bottom: 2rem;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    & > div {
      margin-bottom: 1rem;
    }
  }
`;
const Contact = styled.div`
  ul {
    list-style: none;
    font-size: 0.9rem;
    padding: 0;
    line-height: 1.7;
    color: ${Colors.grey};
    span {
      color: ${Colors.gold};
    }
  }
`;
const OpeningHours = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0;

    span:nth-of-type(2) {
      color: ${Colors.grey};
    }
    span:nth-of-type(2).override {
      color: ${Colors.gold};
    }
  }
`;
const News = styled.div`
  div {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    &:not(:last-of-type) {
      border-bottom: 1px dashed ${Colors.gold};
    }
  }
  p {
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: 0.9rem;
    a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: ${Colors.gold};
      }
    }
  }

  small {
    color: ${Colors.gold};
    font-style: italic;
  }
`;
const SiteLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const SiteLink = styled(Link)``;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(340px * 0.83);

  a {
    text-decoration: none;
    color: #fff;
    font-style: italic;
    &:hover {
      color: ${Colors.gold};
    }
    margin-bottom: 0.7rem;
  }
`;
const FooterBottom = styled.div`
  min-height: calc(45vh * 0.2);
  width: 100%;
  margin: auto;
  max-width: 1300px;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    flex-basis: 30%;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 2rem;

    & > div:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;
const AllRights = styled.div`
  text-align: left;
  font-size: 0.9rem;
  color: ${Colors.grey};
`;
const Year = styled.span``;
const SocialMediaContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  a {
    margin-right: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    color: ${Colors.white};
    * > {
      &:hover {
        fill: ${Colors.gold};
        color: ${Colors.gold};
      }
    }
  }
`;
const Creator = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: ${Colors.grey};
`;

const Facebook = styled(ImFacebook)``;
const Instagram = styled(FiInstagram)``;
const Yelp = styled(ImYelp)``;
const TripAdvisor = styled(SiTripadvisor)``;

const Footer = () => {
  return (
    <Section>
      <Container>
        <WrapperTop>
          <FooterTop>
            <Contact>
              <h5>CONTACT US</h5>
              <div>
                <p>Impresso Cafe</p>
                <ul>
                  <li>836 Park Ct</li>
                  <li>Drayton Valley, Alberta T0E 0M0</li>
                  <li>Phone: 1-780-621-2214</li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:contact@impresso.com"
                      css={`
                        text-decoration: none;
                      `}
                    >
                      <span>contact@impresso.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Contact>
            <OpeningHours>
              <h5>OPENING HOURS</h5>
              <p>
                <span>MONDAY</span>
                <span>7:00am - 5:00pm</span>
              </p>
              <p>
                <span>TUESDAY</span> <span>7:00am - 5:00pm</span>
              </p>
              <p>
                <span>WEDNESDAY</span> <span>7:00am - 5:00pm</span>
              </p>
              <p>
                <span>THURSDAY</span> <span>7:00am - 5:00pm</span>
              </p>
              <p>
                <span>FRIDAY</span> <span>7:00am - 5:00pm</span>
              </p>
              <p>
                <span>SATURDAY</span> <span>8:00am - 2:00pm</span>
              </p>
              <p>
                <span>SUNDAY</span> <span className="override">CLOSED</span>
              </p>
            </OpeningHours>
            <News>
              <h5>IMPRESSO NEWS</h5>
              <div>
                <p>
                  <Link to="/contact">We're reopening soon!</Link>
                </p>
                <small>August 15, 2020</small>
              </div>
              <div>
                <p>
                  <Link to="/contact">Navigating Through COVID-19</Link>
                </p>
                <small>April 30, 2020</small>
              </div>
              <div>
                <p>
                  <Link to="/contact">Welcome to Impresso Cafe</Link>
                </p>
                <small>November 30, 2019</small>
              </div>
            </News>
            <SiteLinks>
              <h5>SITE LINKS</h5>
              <LinksWrapper>
                <SiteLink to="/">Home</SiteLink>
                <SiteLink to="/menu">Our Menu</SiteLink>
                <SiteLink to="/about">About Us</SiteLink>
                <SiteLink to="/contact">Contact Us</SiteLink>
                <SiteLink to="/news">Impresso News</SiteLink>
                <SiteLink to="/menu">View Our Daily Specials</SiteLink>
              </LinksWrapper>
            </SiteLinks>
          </FooterTop>
        </WrapperTop>
        <WrapperBottom>
          <FooterBottom>
            <AllRights>
              <Year>{new Date().getFullYear()} &copy;</Year> Imporesso Cafe -
              All rights reserved
            </AllRights>
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
            <Creator>Designed & Created by Simon Pham</Creator>
          </FooterBottom>
        </WrapperBottom>
      </Container>
    </Section>
  );
};

export default Footer;
