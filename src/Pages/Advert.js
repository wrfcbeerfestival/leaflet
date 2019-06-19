import React from 'react';
import { getImage } from '../image';
export default ({image }) => {
  return (<div><img className="image--full" src={getImage(image)}/></div>)
}