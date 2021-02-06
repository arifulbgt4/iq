import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import MultilevelSidebar from 'react-multilevel-sidebar';
import 'react-multilevel-sidebar/src/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from 'src/components/SocialLinks';
import ContactAddress from 'src/components/ContactAddress';
import ButtonsGroup from 'src/components/ButtButtonsGroup';

const options = [
  {
    hideBorder: true,
    content: [
      {
        id: 1,
        name: (
          <NavLink
            exact
            className="nav-link text-capitalize text-primary"
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
            className="nav-link text-capitalize text-primary"
            to="/career"
          >
            Career
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
            className="nav-link text-capitalize text-primary"
            to="/blog"
          >
            blog
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
            className="nav-link text-capitalize text-primary"
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
        id: 7,
        name: (
          <div className="mt-5 pt-4 menubar-address ps-3">
            <ButtonsGroup />
            <ContactAddress textColor="text-primary" />
            <SocialLinks textColor="text-primary" />
          </div>
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

  const { data: siteLogo } = useSelector((store) => store.websiteDetails);

  const logo = process.env.API_URL + siteLogo.logo_two.url;

  return (
    <>
      <MultilevelSidebar
        open={open}
        options={options}
        wrapperClassName="header-menu-bar"
        onToggle={handleClick}
        onItemClick={handleClick}
        header={
          <div className="text-left pl-4 py-3 d-flex justify-content-between">
            <Link to="/" className="mt-1">
              <img
                src={logo}
                alt="menu-logo"
                className="my-1 ms-4 ps-1"
                style={{ width: '50px' }}
              />{' '}
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
        className="bar  bg-transparent border-0
        d-inline-block d-sm-none text-primary ml-auto  mr-sm-2 p-sm-0"
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </>
  );
};

export default MenuBar;
