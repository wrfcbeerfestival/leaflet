import React from 'react';
import { Link } from 'react-router-dom';
import { getBeerBrewerys } from '../breweryDetails';
import { getImage } from '../image'


export default () => {
  const breweries = getBeerBrewerys();
  const list = Object.keys(breweries).map((key) => {
    const brewery = breweries[key]
    return <Link key={key} to={`/brewery/${key}`}>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage(brewery.image)})` }}>
        <div className="beer-hero-text">{brewery.name}</div>
        </div>
    </Link>
  })
  return <section className="beerlist">
    <h2 className="title">Beer List</h2>
    <p className="paragraph beerlist__desc">View our selection of Beers by brewery.</p>
    { list }
  </section>;
}