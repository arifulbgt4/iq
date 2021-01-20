import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCube,
  faEnvelope,
  faLocationArrow,
  faMapMarked,
  faPhone,
  faTrashAlt,
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
  return (
    <Row className="mt-4">
      <Col md={4}>
        <h5 className="pe-5 text-justify me-5 details text-white fw-normal">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </h5>
      </Col>
      {data &&
        data.map((items) => (
          <Col key={items.id} xl={items.id < 3 ? 2 : 4} lg={2} md={6} sm={6}>
            <ul className="list-unstyled p-0 m-0">
              {items.navitem &&
                items.navitem.map((item) => (
                  <li
                    className={`mb-3 text-capitalize ${items.id > 2 && 'w-75'}`}
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
