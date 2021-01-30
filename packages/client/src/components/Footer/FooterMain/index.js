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
  {
    id: 3,
    navitem: [
      {
        id: 1,
        name: '0/A Fatulah, Narayeanganj.  Dhaka 1400, Bnagladesh.',
        path: '#',
        icons: faLocationArrow,
      },
      {
        id: 2,
        name: '(+880) 199-250552',
        path: '#',
        icons: faPhone,
      },
      {
        id: 3,
        name: 'support@metastock.com',
        path: '#',
        icons: faEnvelope,
      },
    ],
  },
];

const FooterMain = () => {
  const { data: siteLogo } = useSelector((store) => store.websiteDetails);

  const logo = process.env.API_URL + siteLogo.logo_two.url;

  return (
    <Row className="mt-4 text-center text-md-start">
      <Col xs={{ size: 12, order: 2 }} xl={{ size: 4, order: 1 }} className="">
        <h4 className="mb-0 text-white pe-0 pe-xl-5 me-0 me-xl-5 text-center">
          <img width={50} src={logo} alt="logo" />
        </h4>
        <h5 className="pe-0 pe-xl-5 text-justify me-0 me-xl-5 details text-white fw-normal text-center">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </h5>
      </Col>
      {data &&
        data.map((items) => (
          <Col
            key={items.id}
            xl={{ size: items.id < 3 ? 2 : 4, order: 2 }}
            lg={items.id < 3 ? 3 : 6}
            md={items.id < 3 ? 4 : 4}
            sm={12}
            className={`${items.id < 3 && 'px-1 px-lg-3'}`}
          >
            <ul className="list-unstyled p-0 m-0">
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
    </Row>
  );
};

export default FooterMain;
