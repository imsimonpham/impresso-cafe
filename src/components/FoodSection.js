import React from "react";
import styled, { css } from "styled-components/macro";
import { GiKnifeFork } from "react-icons/gi";
import { FoodDataOne, FoodDataTwo } from "../data/FoodData";
import { ButtonTwo } from "../components/Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Colors } from "../data/Variables";

const Section = styled.section`
  min-height: 100vh;
  background: ${Colors.milk};
`;
const Container = styled.div`
  color: #000;
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: auto;
`;
const Intro = styled.div`
  color: #c7a17a;
  /* border: 1px solid black; */
  padding: 2rem 0rem;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 3vw, 2rem);
`;
const Line = styled.span`
  height: 1px;
  width: clamp(40px, 13vw, 200px);
  background: #c7a17a;
`;
const TopTitle = styled.div`
  display: flex;
  margin: 0 1rem;
  align-items: center;
  /* border: 1px solid white; */
`;
const Cutlery = styled(GiKnifeFork)`
  margin-right: 0.3rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid purple; */
  padding: 0;
`;

const gridLayout = css`
  margin-bottom: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  /* padding: 3rem 1rem; */
  column-gap: 1rem;
  row-gap: 3rem;
  place-items: center;
  @media screen and (min-width: 1200px) {
    column-gap: 0rem;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    row-gap: 1rem;

    grid-template-areas:
      "Image Image Image Image Image"
      "Image Image Image Image Image"
      "MiniImage MiniImage MiniImage MiniImage MiniImage"
      "MiniImage2 MiniImage2 MiniImage2 MiniImage2 MiniImage2"
      "Text Text Text Text Text"
      "Text Text Text Text Text";
  }
`;

const InfoRow = styled.div`
  ${gridLayout}
  grid-template-areas:
    "Image Image MiniImage MiniImage"
    "Image Image Text Text"
    "MiniImage2 MiniImage2 Text Text";
  margin-bottom: 5rem;
`;

const InfoRowTwo = styled.div`
  ${gridLayout}

  grid-template-areas:
    "Text Text MiniImage MiniImage"
    "Text Text Image Image"
    "MiniImage2 MiniImage2 Image Image";
`;

const ImageWrapper = styled.div`
  grid-area: Image;
  /* border: 1px solid black; */
  width: 500px;
  height: 600px;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  /* margin-top: ${({ low }) => (low ? "20rem" : "0")}; */
  @media screen and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextWrapper = styled.div`
  grid-area: Text;
  /* border: 1px solid black; */
  /* padding: 0.5rem 0.5rem 0rem 0.5rem; */
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  /* margin-top: ${({ low }) => (low ? "20rem" : "0")}; */

  p {
    line-height: 2;
    color: #4c4c4c;
    font-size: 0.9rem;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  a {
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 992px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const MiniImageWrapper = styled.div`
  float: bottom;
  grid-area: MiniImg;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 276px;

  img {
    width: 49.5%;
    height: 100%;
    /* border: 1px solid black; */
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 2rem;
  }
`;

const MiniImageContainers = css`
  height: 100%;
  width: 500px;
  max-height: 274px;
  overflow-y: hidden;
  display: grid;
  column-gap: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 250px;
  transition: all 0.5s ease-in-out;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }

    @media screen and (max-width: 992px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const MiniImageContainer = styled.div`
  /* border: 1px solid black; */
 ${MiniImageContainers}
  grid-area: MiniImage;
  
  }
`;

const MiniImageContainerTwo = styled.div`
  /* border: 1px solid black; */
  ${MiniImageContainers}
  grid-area: MiniImage2;
  }
`;

const FoodSection = () => {
  return (
    <Section>
      <Container>
        <Intro>
          <Line />
          <TopTitle>
            <Cutlery /> Hungry? We've got you covered!
          </TopTitle>
          <Line />
        </Intro>
        <InfoWrapper>
          <InfoRow>
            <MiniImageContainer>
              <img
                data-aos="fade-up-left"
                data-aos-duration="600"
                src={FoodDataOne.image[3]}
                alt="Food"
              />
              <img
                data-aos="fade-up-left"
                data-aos-duration="600"
                data-aos-delay="200"
                src={FoodDataOne.image[4]}
                alt="Food"
              />
            </MiniImageContainer>
            <ImageWrapper>
              <Image
                data-aos="fade-up-right"
                data-aos-duration="600"
                src={FoodDataOne.image[0]}
              />
            </ImageWrapper>
            <TextWrapper>
              <h3>{FoodDataOne.title}</h3>
              <p>{FoodDataOne.paraOne}</p>
              <p>{FoodDataOne.paraTwo}</p>
              <ButtonTwo to="/menu">
                {FoodDataOne.buttonLabel}
                <Arrow />
              </ButtonTwo>
              <MiniImageWrapper>
                <img
                  data-aos="fade-up-left"
                  data-aos-duration="600"
                  src={FoodDataOne.image[1]}
                  alt="Food"
                />
                <img
                  data-aos="fade-up-left"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  src={FoodDataOne.image[2]}
                  alt="Food"
                />
              </MiniImageWrapper>
            </TextWrapper>
            <MiniImageContainerTwo>
              <img
                data-aos="fade-up-right"
                data-aos-duration="600"
                src={FoodDataOne.image[5]}
                alt="Food"
              />
              <img
                data-aos="fade-up-right"
                data-aos-duration="600"
                data-aos-delay="200"
                src={FoodDataOne.image[6]}
                alt="Food"
              />
            </MiniImageContainerTwo>
          </InfoRow>
          <InfoRowTwo>
            <MiniImageContainer>
              <img
                data-aos="fade-up-left"
                data-aos-duration="600"
                src={FoodDataTwo.image[3]}
                alt="Food"
              />
              <img
                data-aos="fade-up-left"
                data-aos-duration="600"
                data-aos-delay="200"
                src={FoodDataTwo.image[4]}
                alt="Food"
              />
            </MiniImageContainer>
            <ImageWrapper>
              <Image
                data-aos="fade-up-left"
                data-aos-duration="600"
                data-aos-delay="300"
                src={FoodDataTwo.image[0]}
                alt="Food"
              />
            </ImageWrapper>
            <TextWrapper>
              <h3>{FoodDataTwo.title}</h3>
              <p>{FoodDataTwo.paraOne}</p>
              <p>{FoodDataTwo.paraTwo}</p>
              <ButtonTwo to="/menu">
                {FoodDataOne.buttonLabel}
                <Arrow />
              </ButtonTwo>
              <MiniImageWrapper>
                <img
                  data-aos="fade-up-right"
                  data-aos-duration="600"
                  src={FoodDataTwo.image[1]}
                  alt="Food"
                />
                <img
                  data-aos="fade-up-right"
                  data-aos-duration="600"
                  data-aos-delay="300"
                  src={FoodDataTwo.image[2]}
                  alt="Food"
                />
              </MiniImageWrapper>
            </TextWrapper>
            <MiniImageContainerTwo>
              <img
                data-aos="fade-up-right"
                data-aos-duration="600"
                src={FoodDataTwo.image[5]}
                alt="Food"
              />
              <img
                data-aos="fade-up-right"
                data-aos-duration="600"
                data-aos-delay="300"
                src={FoodDataTwo.image[6]}
                alt="Food"
              />
            </MiniImageContainerTwo>
          </InfoRowTwo>
        </InfoWrapper>
      </Container>
    </Section>
  );
};

export default FoodSection;
