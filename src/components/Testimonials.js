import React, { useState } from "react";
import "../styles/Testimonials.scss";
import { TestimonialsData } from "./TestimonialsData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = TestimonialsData.length;
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{TestimonialsData[selected].review}</span> -
        {TestimonialsData[selected].status}
        <span>
          <span>{TestimonialsData[selected].name}</span>
        </span>
      </div>
      <div className="right-t">
        <img src={TestimonialsData[selected].iamge} alt="" />
        <div className="arrows">
          <BsArrowLeftCircleFill className="arrow arrow-left" />
          <BsArrowRightCircleFill className="arrow arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
