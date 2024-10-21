import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = [
    { thumb: "/carousel_img1.jpeg" },
    { thumb: "/carousel_img2.jpeg" },
    { thumb: "/carousel_img3.jpeg" },
    { thumb: "/carousel_img4.jpeg" }
  ];


function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
            <div
            key={index}
            className="max-h-[36rem] object-center brightness-50"
          >
            <img
              className="h-[400px] w-full object-cover"
              src={image?.thumb}
              alt="pizza"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;