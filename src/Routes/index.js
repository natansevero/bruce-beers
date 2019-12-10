import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Beers from '../pages/Beers';
import Beer from '../pages/Beer';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/beers' component={Beers} />
            <Route path='/beers/:id' component={Beer} />
            <Redirect from='*' to='/beers' />
        </Switch>
    </Router>
)

export default Routes;