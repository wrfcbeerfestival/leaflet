import React from 'react';
import { getImage } from '../image'

export default () => {
  return <section className="article">
    <h1 className="article__title">Fancy Dress Rugby</h1>
    <div>
      <img alt="beer festival chairman" className="image--full" src={getImage('/homepage-background.jpg')} />
    </div>
    <div className="article__content">
      <h2 className="bold subheading">Monks</h2>
      <p>Leaving the quiet monastic life of prayer, vows of silence and tranquillity behind for one day only, the monks of WRFC have been led into temptation by Sister Skinny. Relying heavily on the almighty rather than skill or fitness, this team of habitual drinkers will be first on the field and first in the bar after.</p>
      
      <h2 className="bold subheading paragraph--margin-24">Pirates</h2>
      <p>Y’arr me hearties. Normally found looking for plunder off the Spanish main, the pirates have decided to get their fix of grog at the WRFC beer festival. Aiming for the ultimate booty of the 1st place trophy, this team only needs one thing to succeed and one thing only…. INKEEP! MORE GROG!</p>

      <h2 className="bold subheading paragraph--margin-24">Gary Bridge</h2>
      <p>Everyone knows Gary. You know, Gary? The one in the Hawaiian shirt? The one that’s been down here since before time began? You know, the short tall guy with the curly teeth? Walks with a lisp and talks with a limp? The WRFC legend? Yea, that one.</p>

      <h2 className="bold subheading paragraph--margin-24">Wimbledon</h2>
      <p>Old school sports, perms a plenty and moustaches that are manly, think 70’s keegan rather than 1770’s jousting.</p>

      <h2 className="bold subheading paragraph--margin-24">Retro Sports</h2>
      <p>New balls please! tighty white shorts and furry balls abound, the LTA stars will be turning down strawberries and cream to get a mouthful of dirt in the game. Pimms ahoy whilst watching the games from murray mound?</p>

      <h2 className="bold subheading paragraph--margin-24">Geisha</h2>
      <p>It a nod to the world cup in the land of the rising sun later this year. Expect plently of honourable play followed by a soapy massage.</p>

      <h2 className="bold subheading paragraph--margin-24">Best Team Overalls</h2>
      <p> Best team? Overall? That remains to be seen. What is certain is that this team is coming dressed to do a job</p>

      <h2 className="bold subheading paragraph--margin-24">“Alcoholic” Superman</h2>
      <p>Think hancock crossed with duffman, only much more alcohol and a lot less super.</p>
    </div>
  </section>;
}








