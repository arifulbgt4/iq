import React from 'react';
import { Col, Row } from 'reactstrap';
import GuidingPrinciples from 'src/components/GuidingPrinciples';

const data = [
  {
    id: 1,
    style: '',
    img: 'https://antor.thememaster.net/AllImage/goal.png',
    title: 'Excellence',
    description:
      'Good is not enough; we strive to be excellent in all we do. We seek to be differentiated and original in our thinking. We focus on achieving superior risk-adjusted-performance.',
  },
  {
    id: 2,
    style: 'justify-content-end',
    img: 'https://antor.thememaster.net/AllImage/united.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
  {
    id: 3,
    style: '',
    img: 'https://antor.thememaster.net/AllImage/handshake.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
  {
    id: 2,
    style: 'justify-content-end',
    img: 'https://antor.thememaster.net/AllImage/idea.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
];
const GuidingPrinciple = () => {
  return (
    <Row>
      <Col md={12}>
        <h2 className="text-center py-5">Our Guiding Principles</h2>
      </Col>
      <Col md={12}>
        {data && data.map((item, i) => <GuidingPrinciples key={i} {...item} />)}
      </Col>
    </Row>
  );
};

export default GuidingPrinciple;
