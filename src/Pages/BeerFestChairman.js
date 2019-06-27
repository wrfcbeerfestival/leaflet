import React from 'react';
import { getImage } from '../image'

export default () => {
  return <section className="article">
    <h1 className="article__title">Beer festival chairman</h1>
    <div>
      <img alt="beer festival chairman" className="image--full" src={ getImage('/jon-mcclennon.jpg')} />
    </div>
    <div className="article__content">
    <p>Welcome to the digital leaflet. I am glad you have found your way here. Hopefully everything is working fine and you have managed to navigate to this page easily enough. We thought we would try something new and provide a more interactive experience to our event. This site contains everything our paper leaflet does and more, so have a play. To quick link around the site, you can use the icons at the top of the application. Here you can navigate to the contents page and the beer/cider/gin lists.</p>
    <p>Here we are again, my favourite time of the year, Watford Rugby Club Beer & Cider Festival. If you have been here before you’ll know exactly why it's my favourite time of the year, if you have not, let me give you a quick preview. Imagine a world where glorious Beer, Cider and Gin flows free, where glam rockers take on playboy bunnies in a game or rugby, where food, fun, laughter is shared by everyone. If you imagine all that you basically get the festival.</p>
    <p>This year we have our great range of Beer & Cider and back by popular demand GIN. We have brand new glasses with our Festival logo and our popular t-shirts and tankards. While you are at the event we have a few activities going on. O2 touch on the Thursday, Live band on the Friday and our brilliant rugby 7’s on the Saturday. I hear there is going to be a team of inspired by a WRFC legend taking on a group of Monks.</p>
    <p>Our festival is only as good as it is, due to the massive support we have from the WRFC family and friends. From the MMJ parents who look after the bar on Saturday so the seniors can run around dressed in their Sunday best, the guys and girls who help clean all the glasses throughout the event, to Sanchez for doing as little work as possible whilst drinking his own weight in cider. I also have to send out a few special mentions, to the guys who have been helping sort out the event (Andy/Scotty/Jake/Sian/Martin) I couldn’t have done it without you. Amber my amazing girlfriend (queue Pie rolling his eyes at me) for listening to me moan and spend a lot of our holiday doing Beer Festival stuff. Ryan for sorting out the Gin and the Bar and for letting me run all my stupid ideas past him. Then a massive thank you to Clint, the man who started this event, I hope I've done you proud, thank you for getting all that lovely sweet nectar ready for us to drink and forget our own names.</p>
    </div>
    <div className="article__signature">Jon McClennon</div>
  </section>;
}










