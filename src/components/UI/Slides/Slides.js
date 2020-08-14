import React, { useState } from "react";
import ReactSlidy from "react-slidy";
import "react-slidy/lib/styles.css";
import img from "../../../assets/images/home/carousel/BA-Sue-1.jpeg";

const SLIDES = [img, img, img, img, img, img];
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
