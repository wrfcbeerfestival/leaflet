import React from 'react';
import { getImage } from '../image'

export default () => {
  return <section className="article">
    <h1 className="article__title">CAMRA</h1>
    <div>
      <img alt="beer festival chairman" className="image--full" src={getImage('/camralogo.png')} />
    </div>
    <div className="article__content">
      <p>Here at Watford Rugby Club we are passionate about real ale, cider and perry. Its why our festival has been so successful. We share these core values with a great organisation CAMRA. As CAMRA own website says:</p>
      <blockquote>
        <p>CAMRA is considered one of the most successful consumer organisations across Europe. Founded by four real ale enthusiasts back in 1971, today we represent nearly 200,000 members across the UK. </p>
        <p>Our aim is to see good quality real ale, cider and perry in thriving pubs and clubs across every community. We do this by encouraging beer-drinking and pub-going with our beer festivals, pub finders and awards, and by lobbying Government for change to best support the industry. </p>
        <p>There’s plenty for everyone, whether you’re a dedicated campaigner, a beer connoisseur looking to learn more about beer or just want to meet up with friends in your local. Why not join the beer movement today?</p>
      </blockquote>
      <p>For information on how to join visit: <a href="www.camra.org.uk">CAMRA</a></p>
    </div>
  </section>;
}








