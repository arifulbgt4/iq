import React from 'react';
import { Col, Row } from 'reactstrap';
import { Parallax } from 'react-skrollr';

const scroll = {
  data: {
    'data-top-bottom': '',
    'data-center-center': 'opacity: 1; transform: translate(0%, 0%); ',
    'data-bottom-top': 'opacity: 0;transform: translate(-50%, 50%);',
  },
  data2: {
    'data-top-bottom': 'opacity: 1;',
    'data-center-center': 'opacity: 1;  transform:translate(0%, 0%);',
    'data-bottom-top': 'opacity: 1;transform: translate(0%, 50%);',
  },
};

const CarrerItem = (props) => {
  const { img, title, children, id } = props;
  return (
    <Row
      className={`align-items-center my-2 py-2 my-lg-5 py-lg-4 position-relative carrer-items text-center text-md-start ${
        id > 2 && 'px-0 px-md-5'
      } ${id % 2 === 0 ? 'carrer-right' : 'carrer-left'}`}
    >
      <Col
        className={`pd-0 hidden-xs  ${
          id % 2 === 0 ? 'order-md-2' : 'order-md-1'
        }`}
        md={6}
        sm={12}
      >
        <Parallax data={ id % 2 === 0 ? scroll.data2 : scroll.data}>
          <div>
            <h2 className="mb-4 font-weight-normal">{title}</h2>
            <div className="details mb-4">{children}</div>
          </div>
        </Parallax>
      </Col>
      <Col
        className={`pd-0 hidden-xs text-center text-md-left ${
          id % 2 === 0 ? 'order-md-1' : 'order-md-2'
        }`}
        md={6}
        sm={12}
      >
        <Parallax data={ id % 2 === 0 ? scroll.data : scroll.data2}>
          <div className={`text-start`}>
            <figure>
              <img src={img} alt="" className="img-fluid" />
            </figure>
          </div>
        </Parallax>
      </Col>
    </Row>
  );
};

export default CarrerItem;
