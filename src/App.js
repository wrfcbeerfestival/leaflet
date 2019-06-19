import React from "react";
import './Reset.css';
import './App.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StandardContainer from './Containers/Standard';
import BreweryContainer from './Containers/Brewery';
import QuickLinks from './Components/QuickLinks';

const App = () => {
  const rootClassName = `app--${process.env.NODE_ENV}`
  return (
    <div className={rootClassName}>
      <Router>
        <Route basename="/" render={({ location }) => (
          <div className="fill">
            <QuickLinks />
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
              >
                <Switch location={location}>
                  <Route path="/brewery/:brewery" render={(props) => (<BreweryContainer returnUrl="/beer" {...props} />)} />
                  <Route path="/:page" render={(props) => (<StandardContainer {...props} />)} />
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