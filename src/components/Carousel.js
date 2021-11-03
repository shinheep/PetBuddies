import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.thedogapi.com/images/SyXN-e9NX_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Danny</h3>
          <p>Danny was brought in by his owner. His family moved across country, and just couldn't bring him along. Danny is a sweet corgi mix that needs a loving home!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.thecatapi.com/images/4if.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tony</h3>
          <p>Tony loves to hide in boots. His family accidentally sold a pair of boots with Tony in them. We are trying to locate his family.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.thedogapi.com/images/rJFJVxc4m_1280.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Floofy</h3>
          <p>Floofy was found chasing a chicken delivery truck! We believe she has a family, as she knows her basic commands, like "Sit," "Stay," and "Shake". We are looking for her family, but also another family that could foster/adopt her! Warning: she loves chicken! </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.thedogapi.com/images/rJqd1ecV7_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Rex</h3>
          <p>
            Rex was found abandoned at a gas station. He had apparently been there for a few nights before being found. He loves being pet, and any affection from all humans. He's a sweet boy that is looking for his forever home!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;
