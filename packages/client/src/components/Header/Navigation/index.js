import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from 'reactstrap';

import MenuBar from './MenuBar';

import logo from 'src/assets/image/logo.png';

const Navigations = () => {
  return (
    <div className="header-nav border-bottom shadow-sm py-4">
      <Container>
        <Row className=" align-items-center">
          <Col md={12} lg={3} sm={12} className="hiconclm pb-0 pb-md-2 pb-lg-0">
            <div className="d-flex align-items-center hlogo">
              <img src={logo} alt="logo" />
              <Link to="/" className="mb-0 h4 text-decoration-none text-dark">
                <span className="text-primary">Exel</span>Stock
              </Link>
              <MenuBar />
            </div>
          </Col>
          <Col md={7} lg={6} className="hnav">
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
            lg={3}
            className="text-end align-self-center justify-content-end d-flex hbtns"
          >
            <Button outline className="rounded-pill px-4 me-3 " color="primary">
              Login
            </Button>
            <Button className="rounded-pill px-4" color="primary">
              Back Office
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigations;
