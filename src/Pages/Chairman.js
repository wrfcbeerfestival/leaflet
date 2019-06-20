import React from 'react';
import { getImage } from '../image'

export default () => {
  return <section className="article">
    <h1 className="article__title">Watford Rugby Club Chairman</h1>
    <div>
      <img alt="club chairman" className="image--full" src={ getImage('/martin-lee.jpg')} />
    </div>
    <div className="article__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className="article__signature">Martin Lee</div>
  </section>;
}