import React from 'react';
import { Col, Row } from 'reactstrap';

const CarrerItem = (props) => {
  const { img, title, children, id } = props;
  return (
    <Row
      className={`align-items-center my-5 py-4 position-relative carrer-items ${
        id > 2 && 'px-5'
      } ${id % 2 === 0 ? 'carrer-right' : 'carrer-left'}`}
    >
      <Col
        className={`pd-0 hidden-xs  ${
          id % 2 === 0 ? 'order-md-2' : 'order-md-1'
        }`}
        md={6}
        sm={12}
      >
        <div>
          <h2 className="mb-4 font-weight-normal">{title}</h2>
          <div className="details mb-4 text-primary">{children}</div>
        </div>
      </Col>
      <Col
        className={`pd-0 hidden-xs text-center text-md-left ${
          id % 2 === 0 ? 'order-md-1' : 'order-md-2'
        }`}
        md={6}
        sm={12}
      >
        <div className={`text-start`}>
          <figure>
            <img src={img} alt="" className="img-fluid" />
          </figure>
        </div>
      </Col>
    </Row>
  );
};

export default CarrerItem;
