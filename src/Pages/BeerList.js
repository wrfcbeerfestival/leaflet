import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return <section>
    <Link to="/leaflet/brewery/tring">
      <div className="beer-hero beer-hero--1">
        <div className="beer-hero-text">Tring</div>
        </div>
    </Link>
    <Link to="/leaflet/brewery/watling-street">
      <div className="beer-hero beer-hero--1">
        <div className="beer-hero-text">Watling Street</div>
        </div>
    </Link>
  </section>;
}