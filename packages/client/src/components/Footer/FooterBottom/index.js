import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

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
  return (
    <Row className="mt-4">
      <Col md={4}>
        <Form className="me-5 pe-5">
          <FormGroup>
            <Label className="mb-2">Get In Touch</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Mail"
              className="bg-transparent"
            />
          </FormGroup>
        </Form>
      </Col>
      <Col md={4} className="text-center">
        <ListGroup
          horizontal
          className="list-unstyled justify-content-center flex-wrap ml-0 bg-transparent"
        >
          <ListGroupItem className="pe-2 p-0 mb-2 border-start-0 border-top-0 border-bottom-0 border-end bg-transparent">
            <Link to="#" className="text-decoration-none h6">
              Privecy
            </Link>
          </ListGroupItem>
          <ListGroupItem className="px-2 p-0 mb-2  border-end bg-transparent">
            <Link to="#" className="text-decoration-none h6">
              FAQs
            </Link>
          </ListGroupItem>
          <ListGroupItem className="ps-2 p-0 mb-2 border-0 bg-transparent">
            <Link to="#" className="text-decoration-none h6">
              Press
            </Link>
          </ListGroupItem>
        </ListGroup>
        <p>2021 copyrights @ Metastock</p>
      </Col>
      <Col md={4}>
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
