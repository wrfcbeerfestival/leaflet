import React from 'react';
import Brewery from './Brewery';
import { getBreweryDetails, getBeerBrewerys, getCiderBrewerys } from '../breweryDetails';
export default ({ isBeerList, history }) => {
  const itemKeys = Object.keys( isBeerList? getBeerBrewerys() : getCiderBrewerys());
  const items = itemKeys.map((id) => {
    const { data, type } = getBreweryDetails(id);
    return <Brewery data={data} type={type} id={id} hideDescription={true} hideInfo={true} />
  })
  return (
    <div>
      { isBeerList && <p className="instructions">Tap brewery/beer name to see information. Tap the beer icon to rate each beer.</p> }
      { !isBeerList && <p className="instructions">Tap brewery/cider name to see information. Tap the apple icon to rate each cider.</p> }
      {items}
      <div className="back__button" onClick={ () => { history.goBack()}}>View all breweries</div>
    </div>
  )
}