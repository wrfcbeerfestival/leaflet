import React from 'react';
import Facebook from '../facebook.svg';
import Twitter from '../twitter.svg';
import Instagram from '../instagram.svg';
import '../SocialMedia.css';
export default () => {
  return (
    <div className="social-media">
      <h3 className="social-media__title">Follow Watford Rugby Club on:</h3>
      <div className="social-media__icons">
        <a href="www.facebook.com/watfordrugbyclub"><img src={Facebook}></img></a>
        <a href="www.twitter.com/WatfordRFC"><img src={Twitter}></img></a>
        <a href="www.instagram.com/watfordrugbyclub"><img src={Instagram}></img></a>
      </div>
    </div>
  )
}
