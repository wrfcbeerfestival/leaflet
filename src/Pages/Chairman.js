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
      <p>Welcome back!After a two year COVID-enforced hiatus, it gives us great pleasure to once again throw open our doors and invite you along to our now legendary beer festival.</p>
      <p>With all that’s gone (and going) on in the world recently, this weekend gives all of us the perfect opportunity to reset our batteries in the company of good friends with some great beers and cracking ciders.</p>
      <p>As always we continue to expand - keep an eye out for the fantastic Peet Jackson and George Styles playing some awesome music on the Friday evening. Saturday, our legendary fancy dress7’s tournament returns and the rugby continues on Sunday with our inaugural invitational ladies tournament. </p>
      <p>The entertainment continues with the annual funfair around to keep you occupied should the rugby not be enough, and naturally we’ll have some brilliant food on offer from Bilbies and Street Dough craft pizzas. </p>
      <p>As you all know, the beer festival is our biggest fundraiser of the year and helps keep our little community club going. We continue to be a club who pride ourselves on offering affordable rugby for the local community regardless of experience, background or income. If you’re interested in a run out or even just popping along for a pint and some great company, speak to anyone in a Watford shirt about joining our family club.<Link to="/recruitment">how to join!</Link></p>
    </div>
    <div className="article__signature">Martin Lee</div>
  </section>;
}