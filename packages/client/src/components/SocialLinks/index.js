import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, ListGroup, ListGroupItem, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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

const SocialLinks = (props) => {
  const { textColor } = props;
  return (
    <div className=" social-links d-flex justify-content-center justify-content-md-end">
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
                className={`p-2 rounded-circle d-flex ${textColor}`}
              >
                <FontAwesomeIcon icon={item.icon} />
              </Link>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
};

export default SocialLinks;
