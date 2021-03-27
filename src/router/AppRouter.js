import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Header from '../components/Header';

const AppRouter = () => {

  const [ user, setUser ] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data}));
  };

  const resetUser = () => {
    setUser([]);
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Switch>{/*React Router automatically passes 3 props to that component: history, location, match*/}
          <Route
            render={(props) => (
              <FirstStep {...props} user={user} updateUser={updateUser} />
            )}
            path='/'
            exact={true}
          />
          <Route
            render={(props) => (
              <SecondStep {...props} user={user} updateUser={updateUser} />
            )}
            path='/second'
          />
          <Route
            render={(props) => {
              <ThirdStep {...props} user={user} resetUser={resetUser}/>
            }}
            path='/third'
          />
        </Switch>
      </div>
    </BrowserRouter>
  );

};

export default AppRouter;
