import React from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { GiCoffeeCup } from "react-icons/gi";
import { infoText, infoTextTwo, infoTextSlide } from "../data/InfoData";
import { IoMdArrowRoundForward } from "react-icons/io";
import Background from "../images/demo/demo-por-1.jpg";
import Slider from "./Slider";
import { Colors } from "../data/Variables";

const Section = styled.section`
  min-height: 100vh;
  background: ${Colors.dark};
`;
const Container = styled.div`
  /* width: 100%;
  height: 100%; */
  color: #fff;
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: auto;
`;

const CoffeeCup = styled(GiCoffeeCup)`
  margin-bottom: 0.3rem;
  margin-right: 0.3rem;
`;
const Intro = styled.p`
  color: ${Colors.gold};
  /* border: 1px solid white; */
  padding: 2rem 0rem;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: clamp(1rem, 3vw, 2rem); */
  font-size: calc(1rem + 1vw);
`;

const Line = styled.span`
  height: 1px;
  width: calc(40px + 5vw);
  background: ${Colors.gold};
`;

const TopTitle = styled.span`
  display: flex;
  margin: 0 1rem;
  align-items: center;
  /* border: 1px solid white; */
`;
const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 725px;
  column-gap: 1rem;
  row-gap: 3rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const ColumnOne = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  z-index: 2;
  h3 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.7;
    color: ${Colors.grey};
  }

  div {
    width: 100%;
    height: 35%;

    overflow-y: hidden;
  }
`;
const ImgSlider = styled(Slider)`
  margin-bottom: 2rem;
`;

const SliderWrapper = styled.div`
  width: 100%;

  margin-bottom: 2rem;
  @media screen and (max-width: 992px) {
  }
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* border: 1px solid white; */
  p {
    font-size: 0.9rem;
    line-height: 1.7;
    color: ${Colors.grey};
  }

  @media screen and (max-width: 992px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  width: 100%;
`;
const ColumnThree = styled.div`
  /* border: 1px solid white; */
  background: url(${Background});
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 4rem 1rem;
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: rgba(0, 0, 0, 0.9);
  }
`;
const OpeningHours = styled.table`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  line-height: 3;

  caption {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    width: 100%;
    text-transform: uppercase;
    font-weight: 700;
    color: ${Colors.white};
  }

  tbody {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  th,
  td {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  }

  th {
    float: left;
  }

  td:last-of-type.override {
    color: ${Colors.gold};
  }

  td {
    float: right;
    color: ${Colors.grey};
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const InfoRow = styled.div`
  margin-top: 2rem;
  /* border: 1px solid white; */
  display: flex;
  min-height: 350px;
  padding: 2rem;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const RowImageWrapper = styled.div`
  /* border: 1px solid white; */
  width: 350px;
  height: 350px;
  flex-basis: 60%;
  margin-right: 4rem;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
const RowImage = styled.img`
  width: 100%;
  height: 100%;
`;
const RowInfo = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
    @media screen and (max-width: 992px) {
      margin-top: 3rem;
    }
  }
  p {
    line-height: 2;
    color: ${Colors.grey};
    font-size: 0.9rem;
  }
`;

const InfoSection = () => {
  return (
    <Section>
      <Container>
        <Intro>
          <Line />
          <TopTitle>
            <CoffeeCup /> Great Coffee
          </TopTitle>
          <Line />
        </Intro>
        <InfoWrapper>
          <ColumnOne>
            <SliderWrapper>
              <ImgSlider></ImgSlider>
            </SliderWrapper>

            <TextWrapper>
              <h3>{infoTextSlide.title}</h3>
              <p>{infoTextSlide.para}</p>
            </TextWrapper>
          </ColumnOne>
          <ColumnTwo>
            <ImageWrapper>
              <Image src={infoText.image} />
            </ImageWrapper>
            <h3>{infoText.title}</h3>
            <p>{infoText.paraOne}</p>
            <p>{infoText.paraTwo}</p>
            <Button to="/menu" primary="false">
              Learn More <Arrow />
            </Button>
          </ColumnTwo>
          <ColumnThree>
            <OpeningHours>
              <caption>Opening Hours</caption>
              <tbody>
                <tr>
                  <th>Monday</th>
                  <td>7am - 5pm</td>
                </tr>
                <tr>
                  <th>Tuesday</th>
                  <td>7am - 5pm</td>
                </tr>
                <tr>
                  <th>Wednesday</th>
                  <td>7am - 5pm</td>
                </tr>
                <tr>
                  <th>Thursday</th>
                  <td>7am - 5pm</td>
                </tr>
                <tr>
                  <th>Friday</th>
                  <td>7am - 5pm</td>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <td>8am - 2pm</td>
                </tr>
                <tr>
                  <th>Sunday</th>
                  <td className="override">Closed</td>
                </tr>
              </tbody>
            </OpeningHours>
          </ColumnThree>
        </InfoWrapper>
        <InfoRow>
          <RowImageWrapper>
            <RowImage src={infoTextTwo.image} />
          </RowImageWrapper>
          <RowInfo>
            <h3>{infoTextTwo.title}</h3>
            <p>{infoTextTwo.para}</p>
          </RowInfo>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default InfoSection;
