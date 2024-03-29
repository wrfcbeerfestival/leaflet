import React from "react";
import Swipe from 'react-easy-swipe';
import { Redirect } from 'react-router-dom';
import { findPage, getPage } from '../pageOrder'
import SocialMedia from "../Components/SocialMedia";

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
    if (this.triggerToNextPage) {
      const nextPage = getPage(this.props.match.url, true);
      if (nextPage) {
        this.triggerToNextPage = false;
        window.gtag('event', 'swipe next page')
        return this.props.history.push(nextPage.name);
      }
    }

    if (this.triggerToPreviousPage) {
      this.triggerToPreviousPage = false;
      const previousPage = getPage(this.props.match.url);
      if (previousPage) {
        window.gtag('event', 'swipe previous page')
        return this.props.history.push(previousPage.name);
      }
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
    const ComponentToRender = findPage(this.props.match.url);
    if (!ComponentToRender) {
      return <Redirect to="/home" />
    }

    return (<Swipe  allowMouseEvents={true} className="page desktop-max" onSwipeMove={this.onSwipeMove} onSwipeEnd={this.onSwipeEnd}>
      <section>
        {<ComponentToRender.Component {...ComponentToRender.options} />}
        <SocialMedia />
      </section>
    </Swipe>)
  }
}