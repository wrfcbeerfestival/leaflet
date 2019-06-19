import React from "react";
import { getBreweryDetails } from '../breweryDetails';
import Brewery from '../Pages/Brewery';

export default class extends React.Component {
  render() {
    const { data, type } = getBreweryDetails(this.props.match.params.brewery);
    return (
      <section>
        {<Brewery data={data} type={type} id={this.props.match.params.brewery} />}
        <div className="back__button" onClick={ () => { this.props.history.goBack()}}>View all breweries</div>
      </section>
    )
  }
}