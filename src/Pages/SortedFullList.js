import React from 'react';
import { Item as BreweryItem } from './Brewery';
import { getAllBeers } from '../breweryDetails';
import { clearLocalStorage } from '../localstorage';
import SocialMedia from "../Components/SocialMedia";
import groupBy from 'lodash/groupBy';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showClearButton: false };
  }
  onClearStorage() {
    clearLocalStorage();
    this.setState({ localStorageCleared: Date.now() })
  }

  showClearButton() {
    this.setState({ showClearButton: true });
  }

  render() {
    const { isBeerList, history, sort, symbol = '' } = this.props;
  
    const groupedBeers = groupBy(getAllBeers(), sort);
    const items = Object.keys(groupedBeers).sort().map((key) => {
      console.info(key)
      return (
        <div key={key}>
          <h1 className="brewery__title">{key + symbol}</h1>
          {groupedBeers[key].map((beer, index) => {
            return <BreweryItem localStorageCleared={this.state.localStorageCleared}  {...beer} key={`${key}-${index}`} />
          })}
        </div>
      )
    });
    return (
      <div>
        {isBeerList && <p className="instructions">Tap brewery/beer name to see information. Tap the beer icon to rate each beer.</p>}
        {!isBeerList && <p className="instructions">Tap brewery/cider name to see information. Tap the apple icon to rate each cider.</p>}
        {items}
        <div className="back__button" onClick={() => { history.goBack() }}>View all breweries</div>
        {this.state.showClearButton && <div className="clear__button" onClick={() => { this.onClearStorage() }}>Clear all data</div>}
        <p className="paragraph paragraph--margin" onClick={() => { this.showClearButton(); }}>Want to clear your notes/ratings. Click here to reveal the button</p>
        <SocialMedia />
      </div>
    )
  }
}