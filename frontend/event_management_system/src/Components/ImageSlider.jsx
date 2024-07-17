import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ImageSlider.css';
import music from '../Assets/Images/music.png';
import sport from '../Assets/Images/sport.png';
import confe from '../Assets/Images/conference.png';


export default function ImageSlider() {
  return (
    <div className='carousel'>
        <Carousel data-bs-theme="dark" interval={3000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={music}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sport}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={confe}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}
