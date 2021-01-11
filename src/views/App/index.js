import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'src/assets/scss/style.scss';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';
import Header from 'src/components/Header';

// Pages
const Docs = lazy(() => import('../Documentation'));
const Home = lazy(() => import('../Home'));
const ThemeDocPage = lazy(() => import('../Documentation/ThemeDocPage'));

const App = () => {
  document.body.setAttribute('data-theme', 'dark');
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Header />
        <Router>
          <Switch>
            {/* Page routes */}
            <Route
              exact
              path="/"
              render={(props) =>
                withTitle({
                  component: Home,
                  title: 'Welcome',
                  ...props,
                })
              }
            />

            {/* Doc Page */}
            <Route
              exact
              path="/docs"
              render={(props) =>
                withTitle({
                  component: Docs,
                  title: 'Docs',
                  ...props,
                })
              }
            />

            {/** Theme Page */}
            <Route
              exact
              path="/docs/"
              render={(props) =>
                withTitle({
                  component: ThemeDocPage,
                  title: 'Theme Page',
                  ...props,
                })
              }
            />

            {/* Default 404 */}
            <Route
              render={(props) =>
                withTitle({
                  component: NotFound,
                  title: '404 Error',
                  ...props,
                })
              }
            />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
