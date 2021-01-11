import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from 'reactstrap';
import logo from 'src/assets/image/logo.png';

const Header = () => {
  return (
    <header className="border-bottom shadow-sm py-4">
      <Container>
        <Row>
          <Col lg={3} className="d-flex align-items-center">
            <img src={logo} alt="logo" />
            <Link to="/" className="mb-0 h4 text-decoration-none">
              <span className="text-primary">Exel</span>Stock
            </Link>
          </Col>
          <Col lg={6}>
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
                    to="/about"
                  >
                    About Us
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
              </Nav>
            </Navbar>
          </Col>
          <Col
            className="text-end align-self-center justify-content-around d-flex"
            lg={3}
          >
            <Button className="rounded-pill px-4" color="primary">
              Login
            </Button>
            <Button className="rounded-pill px-4" color="primary">
              Back To office
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
