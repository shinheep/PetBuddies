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
          <h3 class='carouselText'>Danny</h3>
          <p class='carouselText'>Danny decided to quit his job of being a good house dog, and has decided to venture off to find the love of his life. We found him sleeping in a pizza shop with several open packages of pepperoni. We're hoping to find him a forever home, and a forever love!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.thecatapi.com/images/4if.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class='carouselText'>Tony</h3>
          <p class='carouselText'>Tony loves to hide in boots. His family accidentally sold a pair of boots with Tony in them. Tony is looking for his family.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.thedogapi.com/images/rJFJVxc4m_1280.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 class='carouselText'>Floofy</h3>
          <p class='carouselText'>Floofy was found chasing a chicken delivery truck! We believe she has a family, as she knows her basic commands, like "Sit," "Stay," and "Shake". We are looking for her family, but also another family that could foster/adopt her! Warning: she loves chicken! </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.thedogapi.com/images/rJqd1ecV7_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 class='carouselText'>Rex</h3>
          <p class='carouselText'>
            Rex has decided that his family doesn't give him enough treats. He has taken it upon himself to put himself up for adoption to find another family that gives him more treats on the daily. He's still living with his current family.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;
