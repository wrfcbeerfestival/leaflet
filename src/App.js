import './App.css';
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Swipe from 'react-easy-swipe';

const SwipeablePage = class extends React.Component {
  triggerToNextPage = false;
  triggerToPreviousPage = false;
  constructor(props) {
    super(props);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
  }
  onSwipeEnd() {
    if (this.triggerToNextPage) {
      if (Number(this.props.match.params.page) < 10) {
        const url = `/${Number(this.props.match.params.page) + 1}`;
        console.info(url)
        return this.props.history.push(url);
      }
    }

    if (this.triggerToPreviousPage) {
      if (Number(this.props.match.params.page) > 1) {
        const url = `/${Number(this.props.match.params.page) - 1}`;
        return this.props.history.push(url);
      }
      return this.props.history.push(this.props.backPage);
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
      { this.props.match.params.page === '3' &&
      <ul>
        <li>
          top
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
          {this.props.match.params.page}
        </li>
        <li>
         bottom
        </li>
      </ul>
  }
    { this.props.match.params.page }
    </section>
    </Swipe>)
  }
}

const App = () => {
  return (
    <div>
      <Router>
        <Route render={({ location }) => (
          <div className="fill">
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
              >
                <Switch location={location}>
                  <Route path="/:page" render={(props) => (<SwipeablePage {...props}>First Page</SwipeablePage>)} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}></Route>
      </Router>
    </div>
  )
}

export default App;