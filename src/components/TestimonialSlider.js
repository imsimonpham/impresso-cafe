import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { TestimonialsData } from "../data/TestimonialsData";
import Testimonials from "../styles/Testimonials.css";

const TestimonialSlider = () => {
  return (
    <Carousel className="TestimonialCarousel">
      {TestimonialsData.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <Carousel.Caption>
              <h4>{item.content}</h4>
              <p>{item.customer}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TestimonialSlider;
