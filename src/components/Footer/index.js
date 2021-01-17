import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';

import canvasAnimation from 'src/utils/canvasAnimation';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import FooterMain from './FooterMain';
import Animation from './Animation';

const Footer = () => {
  const mount = useRef(null);

  useEffect(() => {
    const controls = canvasAnimation(mount?.current);
    return controls.dispose();
  }, [mount]);

  return (
    <footer className="mt-6 overflow-hidden position-relative">
      <Container className="position-relative footer-top">
        <FooterTop />
      </Container>
      <div className="border" />
      <Container className="position-relative footer-main">
        <FooterMain />
        <FooterBottom />
      </Container>
      <Animation />
      <div ref={mount} />
    </footer>
  );
};

export default Footer;
