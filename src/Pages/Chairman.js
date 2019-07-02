import React from 'react';
import { getImage } from '../image'
import { Link } from 'react-router-dom';

export default () => {
  return <section className="article">
    <h1 className="article__title">Watford Rugby Club Chairman</h1>
    <div>
      <img alt="club chairman" className="image--full" src={getImage('/martin-lee.jpg')} />
    </div>
    <div className="article__content">
      <p>On behalf of Watford Rugby Club, I’m pleased to extend a very warm welcome to our annual Beer & Cider Festival. Who would have thought we would be where we are now after our very first event held on a cloudy, miserable weekend in October 2013!</p>
      <p>Watford is very much a community focussed club, one which all our members are quite rightly incredibly proud of. We provide rugby for all ages and abilities regardless of experience, ability or income. If you want to play our wonderful sport, Watford will welcome you with open arms. Should the playing side not appeal to you, we are just as accommodating to those who fancy a pint at the weekend whilst supporting a grassroots club!</p>
      <p>The club continues to go from strength to strength, both on and off the pitch. We run two successful, competitive senior sides on a Saturday with our ever expanding Junior section offering rugby for children from ages 5 to 17 on a Sunday. The real spirit of WRFC can be seen over a weekend when both senior sides are at home on a Saturday, followed by our Junior section training or playing on the Sunday. You will undoubtedly see many of the same faces over the two days, both young and old – Junior players, parents and coaches supporting the 1st and 2nd XV on a Saturday, with senior players returning the favour by supporting, coaching or refereeing on a Sunday. I would encourage anyone who wants a true taste of an authentic WRFC, grass-roots rugby experience to join us on one of these days. Keep an eye on our <a href="www.watfordrfc.co.uk">website</a> during the season for the dates!</p>
      <p>Finally, a huge thank you to our Sponsors and volunteers. Whilst it may be something of a cliché, it is completely true that without you – there is no us. The entire festival is organised and staffed by volunteers from Watford Rugby Club, with award winning pub The Monks Inn sourcing and supplying the fine selection of ale and cider you see before you. A heartfelt thank you to you all.</p>
      <p>Like what you see? Please speak to anyone in WRFC branded gear for more information on <Link to="/recruitment">how to join!</Link></p>
    </div>
    <div className="article__signature">Martin Lee</div>
  </section>;
}