import React from 'react';
import { getImage } from '../image'

export default () => {
  return <section className="article">
    <h1 className="article__title">Beer festival chairman</h1>
    <div>
      <img alt="beer festival chairman" className="image--full" src={ getImage('/jon-mcclennon.jpg')} />
    </div>
    <div className="article__content">
    <p>Welcome to the digital leaflet. I am glad you have found your way here. Hopefully everything is working fine and you have managed to navigate to this page easily enough.  We wanted to provide a more interactive experience to our event. This site contains everything you will need, beer list, food list, event times, so have a play. To quick link around the site, you can use the icons at the top of the application.</p>
    <p>We are <b>FINALLY</b> back again, after a long time due to covid, my favourite time of the year, Watford Rugby Club Beer & Cider Festival. If you have been here before you’ll know exactly why it's my favourite time of the year, if you have not, let me give you a quick preview. Imagine a world where glorious Beer, Cider, Rugby and live music flows free. Where monks take on playboy bunnies in a game of rugby. Where food, fun, laughter is shared by everyone. If you imagine all that you basically get the general idea.</p>
    <p>This year we have our great range of Beer & Cider. We have our popular t-shirts, excellent music on friday and some of the best food around. While you are at the event we have a few activities going on. Fun fair all weekend, Live band on the Friday and our brilliant rugby 7’s on the Saturday. I heard a rumour that some dinosaurs got loose and the croods were sent in to sort them out.</p>
    <p>Our festival is only as good as it is, due to the massive support we have from the WRFC family and friends. From the MMJ parents who look after the bar on Saturday so the seniors can run around dressed in their Sunday best, the guys and girls who help clean all the glasses throughout the event. I also have to send out a few special mentions, to the guys who have been helping sort out the event (Rich/Scotty/Jake/Ryan/Martin) I couldn’t have done it without you. Then a massive thank you to Clint, the man who started this event, I hope I've done you proud, thank you for getting all that lovely sweet nectar ready for us to drink and forget our own names.</p>
    </div>
    <div className="article__signature">Jon McClennon</div>
  </section>;
}










