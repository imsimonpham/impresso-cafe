import React from "react";
import styled from "styled-components/macro";
import bg from "../images/bg/bg-lg-7.jpg";
import TestimonialSlider from "./TestimonialSlider";

const Section = styled.section`
  min-height: 50vh;
  background: url(${bg});
  background-size: cover;
  background-position: center;
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
    opacity: 0.7;
    background: rgba(0, 0, 0, 1);
  }
`;
const Container = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: auto;
  min-height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;
    max-height: 50vh;
  }
`;

const Slider = styled(TestimonialSlider)``;
const Heading = styled.h1`
  z-index: 2;
  color: #c7a17a;
  text-shadow: 5px 5px 20px rgba(300, 300, 300, 0.3);
  margin-top: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Heading>What Our Customers Say...</Heading>
        <Slider />
      </Container>
    </Section>
  );
};

export default Testimonials;
