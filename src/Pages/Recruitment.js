import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../image';

export default () => {
  return (
    <div className="recruitment">
      <h2 className="title">Fancy Taking Up Rugby?</h2>
      <p className="paragraph paragraph--margin">Like to get your kids involved? Want to come out of ‘retirement’? Looking to give yourself a new challenge? No matter the reason we would love to hear from you.</p>
      <p className="paragraph paragraph--margin">At Watford Rugby Club we welcome all players, no matter the age or ability. Senior training sessions have started, running every Tuesday and Thursday 7:15-9pm. MMJ are also recruiting at every age from 6 to 18, for boys and girls.</p>
    <Carousel showThumbs={false} infiniteLoop autoPlay swipeable={false} dynamicHeight={true} width="100%">
        <div>
          <img alt="" src={getImage('/r1.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r2.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r3.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r4.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r5.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r6.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r7.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r8.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r9.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r10.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r11.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r12.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r13.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r14.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r15.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r16.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r17.jpg')} />
        </div>
        <div>
          <img alt="" src={getImage('/r18.jpg')} />
        </div>
      </Carousel>
      <p className="paragraph paragraph--margin">So why not go for it and contact:</p>
      <p className="paragraph paragraph--margin"><b className="bold">Martin Lee, Club Chairman, 07787805262</b></p>
      <p className="paragraph paragraph--margin"><b className="bold">Simon Bram, Club Captain, on 07725 217110.</b></p>
      <p className="paragraph paragraph--margin">Address: Watford Rugby Club, Radlett Road, Watford, Herts WD24 4LL</p>
      <p className="paragraph paragraph--margin"><a href="www.watfordrfc.co.uk">Website</a></p>
      
    </div>
  )
}