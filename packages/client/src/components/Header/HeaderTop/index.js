import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMobile,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Row, ListGroup, ListGroupItem, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    id: 1,
    path: '#',
    icon: faFacebookF,
  },
  {
    id: 2,
    path: '#',
    icon: faInstagram,
  },
  {
    id: 3,
    path: '#',
    icon: faLinkedinIn,
  },

  {
    id: 4,
    path: '#',
    icon: faTwitter,
  },
];


const HeeaderTop = () => {
  return (
    <div className="header-top py-1">
      <Container>
        <Row className="align-items-center">
          <Col  md={8} sm={12} className="d-flex flex-wrap justify-content-center justify-content-md-start">
            <div className="phone me-3 text-white">
              <FontAwesomeIcon icon={faPhone} />
              <span className="ms-2"> + 0000 11 22 33</span>
            </div>
            <div className="email text-white">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ms-2">youremail@gmail.com</span>
            </div>
          </Col>
          <Col md={4} sm={12} className="d-flex justify-content-center justify-content-md-end">
            <ListGroup
              horizontal
              className="list-unstyled align-items-center flex-wrap ml-0 social-icon"
            >
              {data &&
                data.map((item) => (
                  <ListGroupItem
                    className="me-3 p-0  border-0 bg-transparent"
                    key={item.id}
                  >
                    <Link
                      to={item.path}
                      className="p-2 rounded-circle d-flex text-white"
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </Link>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeeaderTop;
