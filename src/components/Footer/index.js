import React from 'react';
import { Container } from 'reactstrap';

import point from 'src/assets/image/point.png';
import line from 'src/assets/image/line.png';
import chart1 from 'src/assets/image/chart1.png';
import chart2 from 'src/assets/image/chart2.png';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import FooterMain from './FooterMain';

const Footer = () => {
  return (
    <footer className="mt-6 overflow-hidden">
      <Container>
        <FooterTop />
      </Container>
      <div className="border" />
      <Container>
        <FooterMain />
        <FooterBottom />
      </Container>
      <div className="position-relative mt-3">
        <img src={line} alt="" className="" />
        <img src={point} alt="" className="position-absolute point" />
        <img src={chart1} alt="" className="img-fluid" />
        <img src={chart2} alt="" className="img-fluid" />
      </div>
    </footer>
  );
};

export default Footer;
