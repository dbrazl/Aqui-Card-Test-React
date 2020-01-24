import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from '../pages/Main';
import Time from '../pages/Time';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/time/:id/:date" exact component={Time} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
