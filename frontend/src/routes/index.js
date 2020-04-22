import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from '~/pages/Page';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/page" component={Page} />
    </Switch>
  );
}
