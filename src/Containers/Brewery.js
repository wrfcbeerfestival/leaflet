import React from "react";
import Swipe from 'react-easy-swipe';
import { getBreweryDetails } from '../breweryDetails';
import Brewery from '../Pages/Brewery';
export default class extends React.Component {
  triggerToNextPage = false;
  triggerToPreviousPage = false;
  constructor(props) {
    super(props);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
  }
  onSwipeEnd() {
    // Maybe need to remove swipe? Or have an alert
    // Need a go back to list at the top?
    if (this.triggerToNextPage) {
      return this.props.history.push(this.props.returnUrl);
    }

    if (this.triggerToPreviousPage) {
      return this.props.history.push(this.props.returnUrl);
    }
  }

  onSwipeMove(pos) {
    if (pos.x < -30) {
      this.triggerToNextPage = true;
    }
    if (pos.x > 30) {
      this.triggerToPreviousPage = true;
    }
  }
  render() {
    return (<Swipe className="page" onSwipeMove={this.onSwipeMove} onSwipeEnd={this.onSwipeEnd}>
      <section>
        {<Brewery data={getBreweryDetails(this.props.match.params.brewery)} />}
        <div className="back__button" onClick={ () => { this.props.history.goBack()}}>View all breweries</div>
      </section>
    </Swipe>)
  }
}