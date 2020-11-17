import React, { useRef, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { arrayOf, object, shape, string } from "prop-types";

const Carousel = ({ images, options }) => {
  const refCarousel = useRef(null);

  useEffect(() => {
    M.Carousel.init(refCarousel.current, options);
  });

  const renderedImg = images.map((image, idx) => (
    <a key={idx} className="carousel-item" href={`#${idx}`}>
      <img src={image.src} alt={image.alt} />
    </a>
  ));

  return (
    <div ref={refCarousel} className="carousel">
      {renderedImg}
    </div>
  );
};

Carousel.propTypes = {
  images: arrayOf(
    shape({
      src: string.isRequired,
      alt: string.isRequired,
    })
  ),
  options: object,
};

Carousel.defaultProps = {
  images: [
    { src: "https://lorempixel.com/250/250/nature/1", alt: "img-one" },
    { src: "https://lorempixel.com/250/250/nature/2", alt: "img-two" },
    { src: "https://lorempixel.com/250/250/nature/3", alt: "img-three" },
    { src: "https://lorempixel.com/250/250/nature/4", alt: "img-four" },
    { src: "https://lorempixel.com/250/250/nature/5", alt: "img-five" },
  ],
  options: { duration: 300, indicators: true },
};

export default Carousel;
