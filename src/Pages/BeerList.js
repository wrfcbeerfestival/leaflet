import React from 'react';
import { Link } from 'react-router-dom';
import { getBeerBrewerys } from '../breweryDetails';
import { getImage } from '../image'


export default () => {
  const breweries = getBeerBrewerys();
  console.info(breweries);
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
    {list}
    <Link to='/brewery/beer/all/colour'>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage('/beer-colours.jpg')})` }}>
        <div className="beer-hero-text">View by colour</div>
      </div>
    </Link>
    <Link to='/brewery/beer/all/percent'>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage('/beer-percentage.jpg')})` }}>
        <div className="beer-hero-text">View by percentage</div>
      </div>
    </Link>
    <Link to='/brewery/beer/all'>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage('/all-beer.jpg')})` }}>
        <div className="beer-hero-text">View all</div>
      </div>
    </Link>
  </section>
}