import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { fatchApi } from 'src/state/ducks/actionApi';

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

// Style
import 'src/assets/scss/style.scss';

const App = () => {
  document.body.setAttribute('data-theme', 'dark');

  const [showScroll, setShowScroll] = useState(false);

  const { loading, error } = useSelector((store) => store.api);
  const dispatch = useDispatch();

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  useEffect(() => {
    dispatch(fatchApi());
  }, [dispatch]);

  if (loading) {
    return <Fallback />;
  }

  if (error) {
    return <Alert color="danger">Server error</Alert>;
  }

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
          <div className="d-flex justify-content-end me-5">
            <Button
              className="scrollTop"
              color="primary"
              onClick={scrollTop}
              style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </Button>
          </div>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
