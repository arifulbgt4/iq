import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import MenuBar from './MenuBar';
import ButtonsGroup from 'src/components/ButtButtonsGroup';

const Navigations = () => {
  const { data } = useSelector((store) => store.websiteDetails);

  const logo = process.env.REACT_APP_API_URL + data.logo_one.url;

  return (
    <div className="header-nav border-bottom shadow-sm py-3 py-md-2  py-lg-0">
      <Container>
        <Row className=" align-items-center">
          <Col
            md={12}
            lg={3}
            sm={12}
            xs={6}
            className="hiconclm pb-0 pb-md-2 pb-lg-0"
          >
            <div className="d-flex align-items-center hlogo justify-content-start justify-content-sm-center justify-content-lg-start">
              <Link to="/" className="mb-0 h4 text-decoration-none text-dark">
                <img width={50} src={logo} alt="logo" />
                <span className="text-primary ms-2">{data.name}</span>
              </Link>
            </div>
          </Col>
          <Col xs={6} className="d-flex d-sm-none justify-content-end">
            <MenuBar />
          </Col>
          <Col
            md={7}
            lg={5}
            xl={5}
            className="hnav col-xxl-6 pb-2 pb-sm-3 pb-lg-0 d-none d-sm-block"
          >
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
                    to="/career"
                  >
                    Career
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
              </Nav>
            </Navbar>
          </Col>
          <Col md={5} lg={4} xl={4} className="col-xxl-3 d-none d-sm-block">
            <ButtonsGroup />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigations;
