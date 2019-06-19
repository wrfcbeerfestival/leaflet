import React from "react";
import Swipe from 'react-easy-swipe';
import { getBreweryDetails } from '../breweryDetails';
import Brewery from '../Pages/Brewery';

const MOVEMENT_AMOUNT = 150;
export default class extends React.Component {
  triggerToNextPage = false;
  triggerToPreviousPage = false;
  constructor(props) {
    super(props);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
  }
  onSwipeEnd() {
    if (this.triggerToNextPage) {
      return this.props.history.push(this.props.returnUrl);
    }

    if (this.triggerToPreviousPage) {
      return this.props.history.push(this.props.returnUrl);
    }
  }

  onSwipeMove(pos) {
    if (pos.x < -Math.abs(MOVEMENT_AMOUNT)) {
      this.triggerToNextPage = true;
    }
    if (pos.x > MOVEMENT_AMOUNT) {
      this.triggerToPreviousPage = true;
    }
  }
  render() {
    const { data, type } = getBreweryDetails(this.props.match.params.brewery);
    return (<Swipe className="page" onSwipeMove={this.onSwipeMove} onSwipeEnd={this.onSwipeEnd}>
      <section>
        {<Brewery data={data} type={type} id={this.props.match.params.brewery} />}
        <div className="back__button" onClick={ () => { this.props.history.goBack()}}>View all breweries</div>
      </section>
    </Swipe>)
  }
}