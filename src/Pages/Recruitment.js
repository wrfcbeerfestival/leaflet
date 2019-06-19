import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../image';

export default () => {
  return (
    <div>
      <h2 className="title">Fancy Taking Up Rugby?</h2>
      <p className="paragraph">Like to get your kids involved? Want to come out of ‘retirement’? Looking to give yourself a new challenge? No matter the reason we would love to hear from you. At Watford Rugby Club we welcome all players, no matter the age or ability. Senior training sessions have started, running every Tuesday and Thursday 7:15-9pm. MMJ are also recruiting at every age from 6 to 18, for boys and girls.</p>
      <p className="paragraph">So why not go for it and contact <b>Martin Lee, Club Chairman, 07787805262</b>. Or call <b>Simon Bram Club Captain, on 07725 217110.</b></p>
      <Carousel showThumbs={false} infiniteLoop autoPlay swipeable={false} width="100%">
        <div>
          <img src={getImage('/homepage.jpeg')} />
        </div>
        <div>
          <img src={getImage('/homepage.jpeg')} />
        </div>
        <div>
          <img src={getImage('/homepage.jpeg')} />
        </div>
        <div>
          <img src={getImage('/homepage.jpeg')} />
        </div>
        <div>
          <img src={getImage('/homepage.jpeg')} />
        </div>
      </Carousel>
      <p className="paragraph">Address: Watford Rugby Club, Radlett Road, Watford, Herts WD24 4LL</p>
      <p className="paragraph"><a href="www.watfordrfc.co.uk">Website</a></p>
      
    </div>
  )
}