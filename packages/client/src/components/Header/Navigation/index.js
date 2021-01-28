import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import MenuBar from './MenuBar';

const Navigations = () => {
  const { data, loading } = useSelector((store) => store.websiteDetails);

  if (loading) {
    return 'Loading';
  }

  const logo = process.env.API_URL + data.logo_one.url;

  return (
    <div className="header-nav border-bottom shadow-sm py-3 py-sm-2  py-md-0">
      <Container>
        <Row className=" align-items-center">
          <Col md={12} lg={3} sm={12} className="hiconclm pb-0 pb-md-2 pb-lg-0">
            <div className="d-flex align-items-center hlogo">
              {!loading && (
                <Link to="/" className="mb-0 h4 text-decoration-none text-dark">
                  <img width={50} src={logo} alt="logo" />
                  <span className="text-primary ms-2">{data.name}</span>
                </Link>
              )}

              <MenuBar />
            </div>
          </Col>
          <Col md={7} lg={5} xl={5} className="hnav col-xxl-6 pb-0 pb-sm-3 pb-lg-0">
            <Navbar className="p-0 d-block">
              <Nav className="justify-content-end">
                <NavItem>
                  <NavLink
                    exact
                    className="nav-link text-capitalize text-secondary"
                    to="/"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    className="nav-link text-capitalize text-secondary"
                    to="/carrer"
                  >
                    Carrer
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    className="nav-link text-capitalize text-secondary"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    className="nav-link text-capitalize text-secondary"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    className="nav-link text-capitalize text-secondary"
                    to="/docs"
                  >
                    Docs
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
          <Col
            md={5}
            lg={4}
            xl={4}
            className="col-xxl-3 text-end align-self-center justify-content-end d-flex hbtns pb-sm-3 pb-lg-0"
          >
            <Button className="rounded-pill px-4 me-3 " color="primary">
              Trade Now
            </Button>
            <Button outline className="rounded-pill px-4" color="primary">
              My IQ A/C
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigations;
