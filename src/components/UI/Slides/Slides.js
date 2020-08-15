import React, { useState } from "react";
import ReactSlidy from "react-slidy";
import "react-slidy/lib/styles.css";
import img from "../../../assets/images/home/carousel/BA-Sue-1.jpeg";
import img1 from "../../../assets/images/home/carousel/BA-Craig-5.jpeg";
import img2 from "../../../assets/images/home/carousel/BA-Jenny-2.jpeg";
import img3 from "../../../assets/images/home/carousel/BA-Karissa-4.jpeg";
import img4 from "../../../assets/images/home/carousel/BA-Keith-7.jpeg";
import img5 from "../../../assets/images/home/carousel/BA-Richelle-3.jpeg";
import img6 from "../../../assets/images/home/carousel/BA-Ryan-6.jpeg";

const SLIDES = [img, img1, img2, img3, img4, img5, img6];
const createStyles = (isActive) => ({
  background: "transparent",
  border: 0,
  color: isActive ? "#333" : "#ccc",
  cursor: "pointer",
  fontSize: "32px",
});

const Slides = () => {
  const [actualSlide, setActualSlide] = useState(0);
  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };
  return (
    <>
      <ReactSlidy
        numOfSlides={3}
        doAfterSlide={updateSlide}
        slide={actualSlide}
      >
        {SLIDES.map((src) => (
          <img alt="" key={src} src={src} />
        ))}
      </ReactSlidy>
      <div className="Dots">
        {SLIDES.map((_, index) => {
          return (
            <button
              key={index}
              style={createStyles(index === actualSlide)}
              onClick={() => updateSlide({ currentSlide: index })}
            >
              &bull;
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Slides;
