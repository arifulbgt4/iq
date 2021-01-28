import React from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax } from 'react-skrollr';

import Icon_phone from 'src/assets/image/contactUs/Icon_phone.png';
import Icon_chatbubbles from 'src/assets/image/contactUs/Icon_chatbubbles.png';

const scroll = {
  data: {
    'data-top-bottom': 'transform: translate(-50%, -40%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 0%);',
  },
  data2: {
    'data-top-bottom': 'transform:translate(50%, -40%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 0%);',
  },
};

const ContactInfo = () => {
  return (
    <div className="posation">
      <Row>
        <Col lg={{ size: 8, offset: 2 }} md={12} sm={12}>
          <Row>
            <Col lg={6} md={6} sm={12} className="contact-info-col">
              <Parallax data={scroll.data}>
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
              </Parallax>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Parallax data={scroll.data2}>
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
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="button">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </Parallax>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContactInfo;
