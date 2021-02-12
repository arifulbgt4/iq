import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import ScrollToTop from 'react-scroll-to-top';
import ReactGA from 'react-ga';

// Style
import 'src/assets/scss/style.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fatchApi } from 'src/state/ducks/actionApi';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Pages
const Home = lazy(() => import('../Home'));
const Carrer = lazy(() => import('../Carrer'));
const ContactUs = lazy(() => import('../ContactUs'));
const Blog = lazy(() => import('../Blog'));
const BligDetails = lazy(() => import('../BlogDetails'));
const ProductDetails = lazy(() => import('../ProductDetails'));



ReactGA.initialize(process.env.UA_TRACKING_ID); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  document.body.setAttribute('data-theme', 'dark');

  const { loading, error } = useSelector((store) => store.api);
  const dispatch = useDispatch();

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
              path="/career"
              render={(props) =>
                withTitle({
                  component: Carrer,
                  title: 'career',
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
                  title: 'Blog',
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/product/:id"
              render={(props) =>
                withTitle({
                  component: ProductDetails,
                  title: 'Product',
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
      <ScrollToTop smooth color="#6f00ff" />
    </>
  );
};

export default App;
