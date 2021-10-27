import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const ReservationForm = loadable(() => import('@pages/ReservationForm'));

const App = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/test" component={ReservationForm} />
    </Switch>
  );
};

export default App;
