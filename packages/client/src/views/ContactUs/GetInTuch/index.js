import React from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax } from 'react-skrollr';

import Contact from 'src/assets/image/contactUs/Contact.png';

const scroll = {
  data: {
    'data-top-bottom': 'transform: translate(-100%, 0%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(100%, 0%);',
  },
  data2: {
    'data-top-bottom': 'opacity: 1; transform:translate(-20%, 0%);',
    'data-center-center': 'opacity: 1; ',
    'data-bottom-top': 'opacity: 1;transform: translate(10%, -10%);',
  },
};

const index = () => {
  return (
    <>
      <Row className="align-items-center text-center text-md-start mt-4 mt-md-0">
        <Col lg={8} md={8} sm={12}>
          <Parallax data={scroll.data2}>
            <div className="tuch-text-area d-flex pt-4 pb-5 py-md-0">
              <div>
                <h1>Get in touch</h1>
                <p>
                  Want to get in touch? We'd love to hear from you. Here's how
                  you can reach us...
                </p>
              </div>
            </div>
          </Parallax>
        </Col>
        <Col lg={4} md={4} sm={12} className="d-none d-sm-flex">
            <Parallax data={scroll.data}>
          <div>
            <img src={Contact} alt="contact img-fluid" />
            </div>
            </Parallax>
        </Col>
      </Row>
    </>
  );
};

export default index;
