import React from 'react';
import { CardBody, CardTitle } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const ChooseCard = (props) => {
  const { img, title, description } = props;

  return (
    <div className="choose-card position-relative">
      <div className="choose-card-img d-flex justify-content-center align-items-center">
        <img src={img} alt="choose card image" />
      </div>
      <CardBody className="choose-card-body text-center">
        <CardTitle
          tag="h4"
          className="choose-card-body_title text-capitalize text-center fw-bold"
        >
          {title}
        </CardTitle>
        <ReactMarkdown className="choose-card-body_description text-capitalize position-relative">
          {description}
        </ReactMarkdown>
      </CardBody>
    </div>
  );
};

export default ChooseCard;
