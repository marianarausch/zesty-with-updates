import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";
import { ReactComponent as BackArrow } from "./assets/arrow-left.svg";
import { ReactComponent as NextArrow } from "./assets/arrow-right.svg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImageValue) => {
      return currentImage < length ? currentImage + 1 : 0;

      // if (currentImage < length) {
      //   return currentImage + 1;
      // } else {
      // }
    });
  };

  const handleNext = () => {
    setCurrentImage((currentImage) => (currentImage + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentImage(
      (currentImage) => (currentImage - 1 + images.length) % images.length
    );
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br />
          by Ella Fielding
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <nav>
          <BackArrow onClick={handleBack} />
          <NextArrow onClick={handleNext} />
        </nav>
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onLoad={handleImageLoad}
            style={{ opacity: currentImage === index ? 1 : 0 }}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
