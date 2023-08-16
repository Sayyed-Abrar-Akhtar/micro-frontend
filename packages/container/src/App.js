import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './component/Header';
import Progress from './component/Progress';
import { Button } from '@material-ui/core';

const MarketingLazy = lazy(() => import('./component/MarketingApp'));
const AuthLazy = lazy(() => import('./component/AuthApp'));
const DashboardLazy = lazy(() => import('./component/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Link to='/dashboard'>
            <Button variant='outlined' color='primary'>
              Dashboard
            </Button>
          </Link>
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/dashboard' component={DashboardLazy} />
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
