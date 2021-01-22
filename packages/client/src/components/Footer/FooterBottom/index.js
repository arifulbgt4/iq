import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Form,
  Input,
  Row,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const data = [faTwitter, faFacebookF, faInstagram, faPinterestP, faLinkedinIn];

const FooterBottom = () => {
  return (
    <Row className="mt-4">
      <Col lg={4}>
        <Form
          className="me-0 me-xl-5 pe-0 pe-xl-5 "
          onSubmit={(e) => e.preventDefault()}
        >
          <InputGroup className="border p-1">
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Mail"
              className="bg-transparent border-0"
            />
            <InputGroupAddon addonType="append">
              <Button className="bg-transparent border-0 text-white">
                {' '}
                <FontAwesomeIcon icon={faTelegram} style={{ fontSize: 25 }} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Col>
      <Col lg={4} className="text-center py-4 py-lg-0">
        <ListGroup
          horizontal
          className="list-unstyled justify-content-center flex-wrap ml-0 bg-transparent"
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
        <p>2021 copyrights @ Metastock</p>
      </Col>
      <Col lg={4}>
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
