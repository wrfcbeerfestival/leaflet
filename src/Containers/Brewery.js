import React from "react";
import { getBreweryDetails } from '../breweryDetails';
import Brewery from '../Pages/Brewery';
import SocialMedia from "../Components/SocialMedia";
import { clearLocalStorageForBrewery } from '../localstorage';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showClearButton: false };
  }
  onClearStorage() {
    clearLocalStorageForBrewery(this.props.match.params.brewery);
    this.setState({ localStorageCleared: Date.now() })
    window.gtag('event', 'local storage clear', {
      'event_category': this.props.match.params.brewery,
    });
  }
  showClearButton() {
    this.setState({
      showClearButton: true
    })
    window.gtag('event', 'show clear button', {
      'event_category': this.props.match.params.brewery,
    });
  }
  render() {
    const { data, type } = getBreweryDetails(this.props.match.params.brewery);
    return (
      <section className="desktop-max">
        {<Brewery localStorageCleared={this.state.localStorageCleared} data={data} type={type} id={this.props.match.params.brewery} />}
        <div className="back__button" onClick={() => { this.props.history.goBack() }}>View all breweries</div>
        {this.state.showClearButton && <div className="clear__button" onClick={() => { this.onClearStorage() }}>Clear data for {data.name}</div>}
        <p className="paragraph paragraph--margin clear__toggle" onClick={() => { this.showClearButton(); }}>Want to your notes/ratings for <b className="bold">{data.name}</b>. Click here to reveal the button</p>
        <SocialMedia />
      </section>
    )
  }
}
