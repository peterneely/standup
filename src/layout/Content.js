import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={NotFound} />
      <Route path="/fuel-savings" component={NotFound} />
      <Route path="/about" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Content;
