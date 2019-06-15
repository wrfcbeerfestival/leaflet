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
import pageOrder from './pageOrder'
import { runInThisContext } from 'vm';

const findPage = (pageName) => {
  const selectedPage = pageOrder.find((page) => {
    return page.name === pageName;
  })
  if (selectedPage) {
    return selectedPage.component;
  }
}

const getPage = (currentPage, forward) => {
  let currentPageIndex;
  const selectedPage = pageOrder.find((page, index) => {
    if (page.name === currentPage) {
      currentPageIndex = index;
      return true;
    };
  })

  return forward ? pageOrder[currentPageIndex + 1]: pageOrder[currentPageIndex-1];
}


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
    if (!ComponentToRender) {
      // this.props.history.push('/home');
      return null;
    }

    return (<Swipe className="page" onSwipeMove={this.onSwipeMove} onSwipeEnd={this.onSwipeEnd}>
    <section>
      { <ComponentToRender /> }
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
                  <Route path="/:page" render={(props) => (<SwipeablePage {...props}></SwipeablePage>)} />
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