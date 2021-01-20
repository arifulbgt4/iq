import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import Icon_phone from 'src/assets/image/contactUs/Icon_phone.png';
import Icon_chatbubbles from 'src/assets/image/contactUs/Icon_chatbubbles.png';

const ContactInfo = () => {
  return (
    <>
      <Row>
        <Col lg={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }} sm={12}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="contact-info-card">
                <div className="img-redus">
                  <img src={Icon_phone} alt="Icon_phone" />
                </div>
                <div className="text-center inside-text">
                  <h3>Talk to our agent</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{' '}
                  </p>
                  <p className="number"> + 000 11 22 33</p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="contact-info-card">
                <div className="img-redus">
                  <img src={Icon_chatbubbles} alt="Icon_phone" />
                </div>
                <div className="text-center inside-text">
                  <h3>Talk to our agent</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{' '}
                  </p>
                  <Button color="primary" size="lg" block>
                    Contact Us
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ContactInfo;
