import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCube,
  faEnvelope,
  faLocationArrow,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    id: 1,
    title: 'Quicks Links',
    navitem: [
      {
        id: 1,
        name: 'Our Story',
        path: '#',
        icons: faCube,
      },
      {
        id: 2,
        name: 'Contact Us',
        path: '#',
        icons: faCube,
      },
      {
        id: 3,
        name: 'ZASUWA Fabrics',
        path: '#',
        icons: faCube,
      },
      {
        id: 4,
        name: 'Product Care',
        path: '#',
        icons: faCube,
      },
    ],
  },
  {
    id: 2,
    title: 'About Us',
    navitem: [
      {
        id: 1,
        name: 'Size Reference',
        path: '#',
        icons: faCube,
      },
      {
        id: 2,
        name: 'Shipping',
        path: '#',
        icons: faCube,
      },
      {
        id: 3,
        name: 'Returns & Exchanges',
        path: '#',
        icons: faCube,
      },
      {
        id: 4,
        name: 'Customer Reviews',
        path: '#',
        icons: faCube,
      },
    ],
  },
];

const FooterMain = () => {
  const { data: siteData } = useSelector((store) => store.websiteDetails);

  const logo = process.env.REACT_APP_API_URL + siteData.logo_two.url;

  return (
    <Row className="mt-4 text-center text-md-start">
      <Col xs={12} xl={4} lg={12}>
        <div className="mb-0 text-white pe-0 pe-xl-5 me-0 me-xl-5 text-center">
          <img src={logo} alt="logo" height="150px" className="img-fluid" />
        </div>
        <h5 className="pe-0 pe-xl-5 text-justify me-0 me-xl-5 details text-white fw-normal text-center mb-4">
          {siteData.description && siteData.description}
        </h5>
      </Col>
      {data &&
        data.map((items) => (
          <Col
            key={items.id}
            xl={items.id < 3 ? 2 : 4}
            lg={4}
            md={4}
            sm={12}
            className={`${items.id < 3 && 'px-1 px-lg-3'} mt-3 mt-xl-0`}
          >
            <ul className="list-unstyled p-0 m-0">
              <li>
                <h4 className="text-white mb-3 text-capitalize">
                  {items.title}
                </h4>
              </li>
              {items.navitem &&
                items.navitem.map((item) => (
                  <li
                    className={`mb-3 text-capitalize ${
                      items.id > 2 && 'w-100 w-lg-75'
                    }`}
                    key={item.id}
                  >
                    <FontAwesomeIcon icon={item.icons} />
                    <Link
                      to={item.path}
                      className="align-items-center ms-2 text-decoration-none text-capitalize"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </Col>
        ))}
      <Col xl={4} lg={4} md={4} sm={12} className={` mt-3 mt-xl-0`}>
        <ul className="list-unstyled p-0 m-0">
          <li>
            <h4 className="text-white mb-3 text-capitalize">Contact Us</h4>
          </li>
          <li
            className={`mb-3 text-capitalize
                       'w-100 w-lg-75'
                    `}
          >
            <FontAwesomeIcon icon={faLocationArrow} />
            <Link
              to="#"
              className="align-items-center ms-2 text-decoration-none text-capitalize"
            >
              {siteData.address}
            </Link>
          </li>
          <li
            className={`mb-3 text-capitalize
                       'w-100 w-lg-75'
                    `}
          >
            <FontAwesomeIcon icon={faPhone} />
            <a
              href={`tel:${siteData.phone}`}
              className="align-items-center ms-2 text-decoration-none text-capitalize"
            >
              {siteData.phone}
            </a>
          </li>
          <li
            className={`mb-3 text-capitalize
                       'w-100 w-lg-75'
                    `}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <a
              href={`mailto:${siteData.email}`}
              className="align-items-center ms-2 text-decoration-none text-capitalize"
            >
              {siteData.email}
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default FooterMain;
