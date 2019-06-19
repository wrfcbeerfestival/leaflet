import React from 'react';
import Brewery from './Brewery';
import { getBreweryDetails, getBeerBrewerys } from '../breweryDetails';
export default () => {
  const beerKeys = Object.keys(getBeerBrewerys());
  const items = beerKeys.map((id) => {
    const { data, type } = getBreweryDetails(id);
    return <Brewery data={data} type={type} id={id} hideDescription={true} hideInfo={true} />
  })
  return (
    <div>
      <p className="instructions">Tap the beer name to see more. Tap the beer icon to rate each beer.</p>
      {items}
    </div>
  )
}