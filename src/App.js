import React from "react";
import './Reset.css';
import './App.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StandardContainer from './Containers/Standard';
import BreweryContainer from './Containers/Brewery';

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
                  <Route path="/leaflet/brewery/:brewery" render={(props) => (<BreweryContainer returnUrl="/beer" {...props} />)} />
                  <Route path="/leaflet/:page" render={(props) => (<StandardContainer {...props} />)} />
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