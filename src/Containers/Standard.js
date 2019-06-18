import React from "react";
import Swipe from 'react-easy-swipe';
import { Redirect } from 'react-router-dom';
import { findPage, getPage } from '../pageOrder'

const MOVEMENT_AMOUNT = 100;


export default class extends React.Component {
  triggerToNextPage = false;
  triggerToPreviousPage = false;
  constructor(props) {
    super(props);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
  }
  onSwipeEnd() {
    console.info('next', this.triggerToNextPage);
    console.info('prev', this.triggerToPreviousPage);
    if (this.triggerToNextPage) {
      const nextPage = getPage(this.props.match.url, true);
      if (nextPage) {
        this.triggerToNextPage = false;
        return this.props.history.push(nextPage.name);
      }
    }

    if (this.triggerToPreviousPage) {
      this.triggerToPreviousPage = false;
      const previousPage = getPage(this.props.match.url);
      if (previousPage) {
        return this.props.history.push(previousPage.name);
      }
    }
  }

  onSwipeMove(pos) {
    console.info(pos.x)
    if (pos.x < -Math.abs(MOVEMENT_AMOUNT)) {
      this.triggerToNextPage = true;
    }
    if (pos.x > MOVEMENT_AMOUNT) {
      this.triggerToPreviousPage = true;
    }
  }
  render() {
    const ComponentToRender = findPage(this.props.match.url);
    if (!ComponentToRender) {
      return <Redirect to="/home" />
    }

    return (<Swipe className="page" onSwipeMove={this.onSwipeMove} onSwipeEnd={this.onSwipeEnd}>
    <section>
      { <ComponentToRender /> }
    </section>
    </Swipe>)
  }
}