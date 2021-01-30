import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import MultilevelSidebar from 'react-multilevel-sidebar';
import 'react-multilevel-sidebar/src/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import logo from 'src/assets/image/logo.png';

const options = [
  {
    hideBorder: true,
    content: [
      {
        id: 1,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-secondary"
            to="/"
          >
            Home
          </NavLink>
        ),
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 2,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-secondary"
            to="/carrer"
          >
            Carrer
          </NavLink>
        ),
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 3,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-secondary"
            to="/valus"
          >
            Valus
          </NavLink>
        ),
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 4,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-secondary"
            to="/contact"
          >
            Contact Us
          </NavLink>
        ),
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 5,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-secondary"
            to="/docs"
          >
            Docs
          </NavLink>
        ),
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 6,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-secondary"
            to="/docs"
          >
            Login
          </NavLink>
        ),
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 7,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-secondary"
            to="/docs"
          >
            Back To office
          </NavLink>
        ),
      },
    ],
  },
];

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <MultilevelSidebar
        open={open}
        options={options}
        wrapperClassName="header-menu-bar"
        onToggle={handleClick}
        header={
          <div className="text-left pl-4 pb-2 d-flex justify-content-between">
            <Link to="/">
              <img src={logo} alt="menu-logo" className="my-1 ms-4 ps-1" />{' '}
            </Link>
            <Button
              onClick={() => setOpen(false)}
              className="cross bg-transparent border-0 p-0 pr-3"
            >
              <FontAwesomeIcon
                className="text-dark"
                icon={faTimes}
                className="fs-4 me-3 text-primary"
              />{' '}
            </Button>
          </div>
        }
      />
      {/* using in our button to open the sidebar */}
      <Button
        onClick={() => setOpen(true)}
        className="bar  bg-transparent border-0 d-xl-none d-lg-none d-md-none d-inline-block text-primary ml-auto  mr-sm-2 p-sm-0"
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </>
  );
};

export default MenuBar;
