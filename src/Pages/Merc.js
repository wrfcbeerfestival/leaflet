import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../image';

export default () => {
  return (
    <div>
      <h2 className="title">Merchandise</h2>
      <p className="paragraph paragraph--margin">
        Enjoying the festival? Don't want to forget your time? Why not pick up a t-shirt or tankard. Limited stock
      </p>
      <Carousel showThumbs={false} infiniteLoop autoPlay swipeable={false} dynamicHeight={true} width="100%">
        <div>
          <img alt="" src={getImage('/merc-shirt.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/merc-pint-glass.jpg')} />
        </div>
      </Carousel>
      <p className="paragraph paragraph--margin bold">T-Shirt: £10</p>
      <p className="paragraph paragraph--margin bold">Tankard: £10 - free half pint</p>
    </div>
  )
}