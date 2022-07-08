import React from 'react';
import Facebook from '../facebook.svg';
import Twitter from '../twitter.svg';
import Instagram from '../instagram.svg';
import '../SocialMedia.css';
export default () => {
  return (
    <div className="social-media">
      <h3 className="social-media__title">Like what we are doing?</h3>
      <p className="social-media__hashtag"><button className="social-media__button"><a href="https://www.justgiving.com/crowdfunding/watford-rugby-club-2022">Donate here</a></button></p>
      <br />
      <h3 className="social-media__title">Follow Watford Rugby Club</h3>
      <p className="social-media__hashtag">Use the hashtag <b className="bold">#wrfcbeerfestival</b></p>
      <div className="social-media__icons">
        <a href="//facebook.com/watfordrugbyclub" onClick={() => {
          window.gtag('event', 'social media', {
            'event_category': 'facebook'
          });
        }}><img alt="facebook" src={Facebook}></img></a>
        <a href="//twitter.com/WatfordRFC" onClick={() => {
          window.gtag('event', 'social media', {
            'event_category': 'twitter'
          });
        }}><img alt="twitter" src={Twitter}></img></a>
        <a href="//instagram.com/watfordrugbyclub" onClick={() => {
          window.gtag('event', 'social media', {
            'event_category': 'instagram'
          });
        }}><img alt="instagram" src={Instagram}></img></a>
      </div>
    </div>
  )
}
