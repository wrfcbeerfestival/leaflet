import React from 'react';
import { Link } from 'react-router-dom';
import { getCiderBrewerys } from '../breweryDetails';
import { getImage } from '../image'


export default () => {
  const breweries = getCiderBrewerys();
  const list = Object.keys(breweries).map((key) => {
    const brewery = breweries[key]
    return <Link key={key} to={`/brewery/${key}`}>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage(brewery.image)})` }}>
        <div className="beer-hero-text">{brewery.name}</div>
        </div>
    </Link>
  })
  return <section>
    <h2 className="title">Cider List</h2>
    <p className="paragraph ciderlist__desc">View our selection of Ciders by brewery.</p>
    { list }
    <Link to={`/brewery/cider/all`}>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage('/all-beer.jpg')})` }}>
        <div className="beer-hero-text">View all</div>
        </div>
    </Link>
  </section>;
}