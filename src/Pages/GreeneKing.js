import React from 'react';
import { getImage } from '../image'

export default () => {
  return <section className="article">
    <div className="paragraph--margin">
      <img alt="Greene King" className="image--full" src={getImage('/greenking.png')} />
    </div>
    <div className="article__content">
      <h2 className="bold subheading">Tudor Arms</h2>
      <p>Come join us for food, great atmosphere and a lot of banter. Tudor Arms welcomes Watford Rugby club and all its supports.</p>
      <div>
        <img alt="Green King" className="image--full" src={getImage('/greene-king-1.jpg')} />
      </div>
      <h2 className="bold subheading">The Red House</h2>
      <p>A warm and friendly community pub. We serve quality traditional pub food with a wide range of choice. With a selection of ales, wines and an extensive Gin collection, we have something for everyone, even treats for the dog</p>
      <div>
        <img alt="Green King" className="image--full" src={getImage('/greene-king-2.jpg')} />
      </div>
      <h2 className="bold subheading">The Fox and Hounds</h2>
      <p>Your local value community sports pub. We are the best place to watch sport all year round, showing the best of live Football, Rugby and other high profile sport events when available on Sky, BT and terrestrial TV. A great selection of Real Ales and Ciders, along with an extensive range of popular larger's spirits and wine to suit all tastes.</p>
      <div>
        <img alt="Green King" className="image--full" src={getImage('/greene-king-3.jpg')} />
      </div>
    </div>
  </section>;
}
