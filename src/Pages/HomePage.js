import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../image';
export default () => {
  return (
    <div>
      <p className="homepage__dates">Join us: 8th July - 10th July</p>
      <div className="homepage__title">
        <div className="homepage__title-container">
          <h1 className="homepage__title-item">Beer &</h1>
          <h1 className="homepage__title-item">Cider</h1>
          <h1 className="homepage__title-item">Festival</h1>
        </div>
      </div>
      <p className="homepage__instructions instructions">Swipe from right to left to go to the next page</p>
      <p className="homepage__desc">To call our event a ‘beer festival’ perhaps does ourselves a disservice – we provide so much more than can be summed up in two words. With over 30 real ales of varying styles, strength and taste there is something to suit every palette. Our cider selection goes from strength to strength and the return of perennial favourites such as Bee Sting and Plum Porter alongside some truly unique offerings mean there is something for everyone.</p>
      <p className="title">Fridays food from our friends</p>
      <img className="image--full" alt="food" src={getImage('/food-2.jpg')} />
      <p className="homepage__desc">Of course, we aren’t just about the drinking. On Friday we welcome all-comers to an open mixed touch rugby tournament – ideal for those new to the game to give the club and sport a try. Saturday sees the return of the now legendary WRFC fancy dress 7’s tournament which really does need to be experienced to be believed. Check out the pictures below for an idea of what to expect.</p>
      <Carousel showThumbs={false} infiniteLoop autoPlay swipeable={false} dynamicHeight={true} width="100%">
        <div>
          <img alt="" src={getImage('/homepage-1.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/homepage-2.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/homepage-4.jpg')} />
        </div>
      </Carousel>
    </div>
  )
}