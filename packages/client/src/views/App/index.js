import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'src/assets/scss/style.scss';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Pages
const Docs = lazy(() => import('../Documentation'));
const Home = lazy(() => import('../Home'));
const Carrer = lazy(() => import('../Carrer'));

const App = () => {
  document.body.setAttribute('data-theme', 'dark');
  return (
    <>
      <Router>
        <Suspense fallback={<Fallback />}>
          <Header />
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
            <Route
              exact
              path="/carrer"
              render={(props) =>
                withTitle({
                  component: Carrer,
                  title: 'Carrer',
                  ...props,
                })
              }
            />

            {/* Doc Page */}
            <Route
              path="/docs"
              render={(props) =>
                withTitle({
                  component: Docs,
                  title: 'Docs',
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
          <Footer />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
