import React from 'react';
//45998116171 -jo
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RedirectPage from '../pages/RedirectPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/:code" component={RedirectPage} />
                <Route exatc path="/:code/stats" component={StatsPage} />
                <Route exatc path="/*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;