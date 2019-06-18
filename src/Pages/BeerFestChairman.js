import React from 'react';
import { getImage } from '../image'

export default () => {
  return <section className="article">
    <h1 className="article__title">Beer festival chairman</h1>
    <div>
      <img className="image--full" src={ getImage('/jon-mcclennon.jpg')} />
    </div>
    <div className="article__content">
      <p>Welcome to the digital leaflet! Something new that we are trying out this year. We are always trying to make our Beer & Cider festival even better and we hope this leaflet will help</p>
      <p>You'll find everything good about the paper leaflet through the pages, plus some extra features. As you navigate through by swiping you'll find the beer and cider lists. Split by brewery you'll be able to rate each beer and add notes digital. All this information gets saved on your device and you can clear if you wish</p>
      <p>This is my 3rd year running the event as it always makes me smile, just the amount of enthusiam that people have for the event. From the great range of beer and cider to seeing Mr Skinny Portway run around the pitch in some revealing outfit.</p>
      <p>If this if your first time at the event, or you are a vet we would always love to hear from you. If thats to talk about the beer, help with selection or just a chat, WRFC is a club that accepts all.</p>
    </div>
    <div className="article__signature">Jon McClennon</div>
  </section>;
}










