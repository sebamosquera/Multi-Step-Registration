import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div className='container'>
      <Header />
      <Switch>{/*React Router automatically passes 3 props to that component: history, location, match*/}
        <Route component={FirstStep} path='/' exact={true} />
        <Route component={SecondStep} path='/second' />
        <Route component={ThirdStep} path='/third' />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
