import React from 'react';
import Home from '../home.svg';
import Cider from '../filled-apple.svg';
import Beer from '../filled-beer.svg';
import Gin from '../filled-gin.svg';
import { Link } from 'react-router-dom';
import '../QuickLinks.css';
export default () => {
  return (
    <div className="quicklinks">
      <div>
        <Link to="/contents">
          <span>
            <img src={Home} />
          </span>
        </Link>
      </div>

      <div>
        <Link to="/beer">
          <span>
            <img src={Beer} />
          </span>
        </Link>
        <Link to="/cider">
          <span>
            <img src={Cider} />
          </span>
        </Link>
        <Link to="/gin">
          <span>
            <img src={Gin} />
          </span>
        </Link>
      </div>
    </div>
  )
}