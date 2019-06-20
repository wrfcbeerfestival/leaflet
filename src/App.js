import React from "react";
import './Reset.css';
import './Site.css';
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
import FullList from './Pages/FullList';
import SortedFullList from './Pages/SortedFullList';

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
                  <Route path="/brewery/beer/all/colour" render={(props) => (<SortedFullList returnUrl="/beer" sort="colour" {...props} isBeerList={true} />)} />
                  <Route path="/brewery/beer/all/percent" render={(props) => (<SortedFullList returnUrl="/beer" sort="percent" symbol={'%'} {...props} isBeerList={true} />)} />
                  <Route path="/brewery/cider/all/colour" render={(props) => (<SortedFullList returnUrl="/cider" sort="colour" {...props} isBeerList={false} />)} />
                  <Route path="/brewery/cider/all/percent" render={(props) => (<SortedFullList returnUrl="/cider" sort="percent" symbol={'%'} {...props} isBeerList={false} />)} />
                  <Route path="/brewery/beer/all" render={(props) => (<FullList returnUrl="/beer" {...props} isBeerList={true} />)} />
                  <Route path="/brewery/cider/all" render={(props) => (<FullList returnUrl="/cider" {...props} isBeerList={false} />)} />
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