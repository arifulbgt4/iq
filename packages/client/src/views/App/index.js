import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'src/assets/scss/style.scss';

import { fatchWebsiteDetails } from 'src/state/ducks/ui';
import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Pages
const Docs = lazy(() => import('../Documentation'));
const Home = lazy(() => import('../Home'));
const Carrer = lazy(() => import('../Carrer'));
const ContactUs = lazy(() => import('../ContactUs'));
const Blog = lazy(() => import('../Blog'));
const BligDetails = lazy(() => import('../BlogDetails'));

const App = () => {
  document.body.setAttribute('data-theme', 'dark');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchWebsiteDetails());
  }, [dispatch]);

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
            <Route
              exact
              path="/contact"
              render={(props) =>
                withTitle({
                  component: ContactUs,
                  title: 'Contact',
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/blog"
              render={(props) =>
                withTitle({
                  component: Blog,
                  title: 'Blog',
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/blog/:id"
              render={(props) =>
                withTitle({
                  component: BligDetails,
                  title: 'blogdetails',
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
