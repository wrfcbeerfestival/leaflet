import React from 'react';
import Brewery from './Brewery';
import { getBreweryDetails, getBeerBrewerys, getCiderBrewerys } from '../breweryDetails';
import { clearLocalStorage } from '../localstorage';
import SocialMedia from "../Components/SocialMedia";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showClearButton : false };
  }
  onClearStorage() {
    clearLocalStorage();
    this.setState({ localStorageCleared: Date.now()})
  }

  showClearButton() {
    this.setState({ showClearButton: true });
  }

  render() {
    const { isBeerList, history } = this.props;
    const itemKeys = Object.keys(isBeerList ? getBeerBrewerys() : getCiderBrewerys());
    const items = itemKeys.map((id) => {
      const { data, type } = getBreweryDetails(id);
      return <Brewery key={id} localStorageCleared={this.state.localStorageCleared} data={data} type={type} id={id} hideDescription={true} hideInfo={true} />
    })
    return (
      <div className="desktop-max">
        {isBeerList && <p className="instructions">Tap brewery/beer name to see information. Tap the beer icon to rate each beer.</p>}
        {!isBeerList && <p className="instructions">Tap brewery/cider name to see information. Tap the apple icon to rate each cider.</p>}
        {items}
        <div className="back__button" onClick={() => { history.goBack() }}>View all breweries</div>
        { this.state.showClearButton && <div className="clear__button" onClick={() => { this.onClearStorage() }}>Clear all data</div>}
        <p className="paragraph paragraph--margin clear__toggle" onClick={() => { this.showClearButton();}}>Want to clear your notes/ratings. Click here to reveal the button</p>
        <SocialMedia />
      </div>
    )
  }
}