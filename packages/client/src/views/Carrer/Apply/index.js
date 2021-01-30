import React from 'react';
import { Col, Row } from 'reactstrap';
import { Parallax } from 'react-skrollr';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import ApplyForm from './ApplyForm';

const scroll = {
  data: {
    'data-top-bottom': '',
    'data-center-center': 'opacity: 1; transform: translate(0%, 0%); ',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 70%);',
  },
};

const Apply = () => {
  const { data } = useSelector((store) => store.applay);

  return (
    <Row className="px-0 px-md-5 py-5 text-center text-md-start">
      <Col>
        <Parallax data={scroll.data}>
          <h2>{data.title}</h2>
          <ReactMarkdown>{data.description}</ReactMarkdown>
          <ApplyForm />
        </Parallax>
      </Col>
    </Row>
  );
};

export default Apply;
