import React from 'react';
import { Container } from 'reactstrap';
import { ParallaxProvider } from 'react-skrollr';

import ContactInfo from './ContactInfo';
import GetInTuch from './GetInTuch';
import MapLocation from './MapLocation';
import SendMail from './SendMail';
const ContactUs = () => {
  return (
        <ParallaxProvider
      init={{
        smoothScrollingDuration: 900,
        smoothScrolling: true,
        forceHeight: false,
      }}
      getScrollTop={(scrollTop) => console.log('scrollTop', scrollTop)}
    >
      <Container>
        <GetInTuch />
        <ContactInfo />
        <SendMail />
        <MapLocation />
      </Container>
    </ParallaxProvider>
  );
};

export default ContactUs;
