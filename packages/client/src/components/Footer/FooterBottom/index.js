import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const data = [faTwitter, faFacebookF, faInstagram, faPinterestP, faLinkedinIn];

const FooterBottom = () => {
  const { data: website } = useSelector((store) => store.websiteDetails);

  return (
    <Row className="mt-0 mt-md-4">
      <Col
        xl={{ size: 4, offset: 4 }}
        md={6}
        className="text-center text-md-start py-4 py-lg-0"
      >
        <ListGroup
          horizontal
          className="list-unstyled justify-content-center justify-content-md-start flex-wrap ml-0 bg-transparent"
        >
          <ListGroupItem className="pe-2 p-0 mb-2 border-start-0 border-top-0 border-bottom-0 border-end bg-transparent">
            <Link to="#">Privecy</Link>
          </ListGroupItem>
          <ListGroupItem className="px-2 p-0 mb-2  border-end bg-transparent">
            <Link to="#">FAQs</Link>
          </ListGroupItem>
          <ListGroupItem className="ps-2 p-0 mb-2 border-0 bg-transparent">
            <Link to="#">Press</Link>
          </ListGroupItem>
        </ListGroup>
        <p>2021 copyrights @ {website.name}</p>
      </Col>
      <Col xl={4} md={6}>
        <ListGroup
          horizontal
          className="list-unstyled justify-content-between flex-wrap ml-0 social-icon"
        >
          {data &&
            data.map((item, i) => (
              <ListGroupItem
                className="mr-3 p-0 mb-2 border-0 bg-transparent"
                key={i}
              >
                <Link to="#" className="p-2 rounded-circle d-flex">
                  <span className="rounded-circle p-2">
                    <FontAwesomeIcon icon={item} />
                  </span>
                </Link>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default FooterBottom;
