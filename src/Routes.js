import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Components
import Home from './Scenes/Home';
import Repository from './Scenes/Repository';
// import CommitsList from '../Scenes/CommitList';

export const history = createHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      {/* <Route
        path='/list-commits/:username/:repos'
        exact={true}
        component={CommitsList}
      />*/}
      <Route path='/:username' exact={true} component={Repository} /> 
    </Switch>
  </Router>
);

export default Routes;