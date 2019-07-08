import React from 'react';
import Home from '../home.svg';
import Cider from '../filled-apple.svg';
import Beer from '../filled-beer.svg';
import Burger from '../burger.svg';
import Gin from '../filled-gin.svg';
import { Link } from 'react-router-dom';
import '../QuickLinks.css';

const onClick = (type) => { 
  window.gtag('event', 'quick links', {
    'event_category': 'click',
    'event_label': type
  });
}

export default () => {
  return (
    <div className="quicklinks">
      <div>
        <Link to="/contents" onClick={ () => { onClick('home'); }}>
          <span>
            <img alt="home" src={Home} />
          </span>
        </Link>
      </div>

      <div>
        <Link to="/beer" onClick={ () => { onClick('beer'); }}>
          <span>
            <img alt="beer list" src={Beer} />
          </span>
        </Link>
        <Link to="/cider" onClick={ () => { onClick('cider'); }}>
          <span>
            <img alt="cider list" src={Cider} />
          </span>
        </Link>
        <Link to="/gin" onClick={ () => { onClick('gin'); }}>
          <span>
            <img alt="gin list" src={Gin} />
          </span>
        </Link>
        <Link to="/food" onClick={ () => { onClick('food'); }}>
          <span>
            <img alt="food list" src={Burger} />
          </span>
        </Link>
      </div>
    </div>
  )
}