'use client';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  url: string;
  title: string;
};

const Slideshow = ({ slides, arrows=true }: { slides: Slide[], arrows: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const isLast = prevIndex === slides.length - 1;
      return isLast ? 0 : prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const isLast = prevIndex === slides.length - 1;
        return isLast ? 0 : prevIndex + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const sliderStyles: React.CSSProperties = {
    height: "100%",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    border: "2px solid black"
  };

  const slideStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "background-image 0.6s ease-in-out, opacity 0.6s ease-in-out",
  };

  const arrowBase: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "9999px",
    padding: "4px",
  };

  const dotsContainerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "15px",
    width: "100%",
    zIndex: 10,
  };

  const dotStyles: React.CSSProperties = {
    margin: "0 5px",
    cursor: "pointer",
    fontSize: "16px",
    color: "rgba(255,255,255,0.1)",
  };

  return (
    <div style={sliderStyles}>
      {/* Current Slide */}
      <div style={slideStyles}></div>

      { arrows && ( // check if arrows are wanted
        <>
          <div style={{ ...arrowBase, left: "20px" }} onClick={goToPrevious}>
            <ChevronLeft color="black" size={40} />
          </div>

        
          <div style={{ ...arrowBase, right: "20px" }} onClick={goToNext}>
            <ChevronRight color="black" size={40} />
          </div>
        </>
      )}


      {/* Dots */}
      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              ...dotStyles,
              color: slideIndex === currentIndex ? "black" : "rgba(0,0,0,0.3)",
            }}
            onClick={() => setCurrentIndex(slideIndex)}
          >
            ⬤
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
