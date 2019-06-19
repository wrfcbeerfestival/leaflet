import React from 'react';
import { Link } from 'react-router-dom';

import { mainPageOrdering } from '../pageOrder';
export default () => {
  const items = mainPageOrdering.map((item) => {
    return <li className="contents__item" key={item.name}><Link to={item.name}>{item.prettyName}</Link></li>;
  })
  return (
    <div className="contents">
    <h2 className="title">Contents Page</h2>
    <p className="paragraph">Navigate directly to a page you want. Or carry on swiping. You can come back to this page anytime by clicking the house in the top navigation bar</p>
    <ul className="contents__list">
      { items }
    </ul>
    </div>
  )
}