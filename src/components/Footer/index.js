import React from 'react';
import { Container } from 'reactstrap';

import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import FooterMain from './FooterMain';
import Animation from './Animation';

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
      <Animation />
    </footer>
  );
};

export default Footer;
