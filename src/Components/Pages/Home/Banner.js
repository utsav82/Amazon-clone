import React from "react";
import { useState, useEffect } from "react";

import "./Banner.css";

const prev = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
  </svg>
);
const next = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
  </svg>
);

function Banner({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2500);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="section">
      <div className="section-center">
        {images.map((image, indexImage) => {
          let postion = "nextSlide";
          if (indexImage === index) {
            postion = "activeSlide";
          }
          if (
            indexImage === index - 1 ||
            (index === 0 && indexImage === images.length - 1)
          ) {
            postion = "lastSlide";
          }
          return (
            <article className={postion} key={indexImage}>
              <div>
                <img src={image} alt="banner__image" className="banner-img" />
              </div>
            </article>
          );
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          {prev}
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          {next}
        </p>
      </div>
    </div>
  );
}

export default Banner;
