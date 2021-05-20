import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { CarouselData } from "../data/CarouselData";
import SliderCustom from "../styles/SliderCustom.css";

const Image = styled.img``;

const Slider = () => {
  return (
    <Carousel className="smallCarousel">
      {CarouselData.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <Image className={item.className} src={item.Image} alt={item.alt} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
