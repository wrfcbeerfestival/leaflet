import React from "react";
import Swipe from 'react-easy-swipe';
import { Redirect } from 'react-router-dom';
import { findPage, getPage } from '../pageOrder'
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
        return this.props.history.push(nextPage.name);
      }
    }

    if (this.triggerToPreviousPage) {
      const previousPage = getPage(this.props.match.url);
      if (previousPage) {
        return this.props.history.push(previousPage.name);
      }
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
    const ComponentToRender = findPage(this.props.match.url);
    console.info(this.props)
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