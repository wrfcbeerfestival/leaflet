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
    <p className="instructions">Please note due to limited rack space, not all ciders are on at once</p>
    { list }
    <Link to="/brewery/cider/all/colour">
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage('/cider-fruit.jpg')})` }}>
        <div className="beer-hero-text">View by sweetness</div>
        </div>
    </Link>
    <Link to={`/brewery/cider/all/percent`}>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage('/beer-percentage.jpg')})` }}>
        <div className="beer-hero-text">View by percentage</div>
        </div>
    </Link>
    <Link to={`/brewery/cider/all`}>
      <div className="beer-hero beer-hero--1" style={{ backgroundImage: `url(${getImage('/all-beer.jpg')})` }}>
        <div className="beer-hero-text">View all</div>
        </div>
    </Link>
  </section>;
}