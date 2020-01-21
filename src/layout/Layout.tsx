import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Sub from '../pages/Sub/Sub';

const Layout: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/sub" component={Sub} />
    </Switch>
  );
};

export default Layout;
