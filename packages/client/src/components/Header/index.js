import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from 'reactstrap';
import logo from 'src/assets/image/logo.png';

const Header = () => {
  return (
    <header className="border-bottom shadow-sm py-4">
      <Container>
        <Row className=" align-items-center">
          <Col md={12} lg={3} className="d-flex align-items-center hlogo">
            <img src={logo} alt="logo" />
            <Link to="/" className="mb-0 h4 text-decoration-none text-dark">
              <span className="text-primary">Exel</span>Stock
            </Link>
          </Col>

          <Col md={12} lg={6} className="hnav">
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
                    to="/valus"
                  >
                    Valus
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
            md={12}
            lg={3}
            className="text-end align-self-center justify-content-around d-flex hbtns"
          >
            <Button outline className="rounded-pill px-4 " color="primary">
              Login
            </Button>
            <Button outline className="rounded-pill px-4" color="primary">
              Back To office
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
