import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import slide1 from "../assets/images/ham.jpg"
import slide2 from "../assets/images/meat.jpg"
import slide3 from "../assets/images/fried.jpg"
import '../styles/slider.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slider'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Delicious Hamburger</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Bacon</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Assorted Rice</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export default ControlledCarousel
