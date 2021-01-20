import React from 'react';
import { Container } from 'reactstrap';
import ContactInfo from './ContactInfo';
import GetInTuch from './GetInTuch';
import MapLocation from './MapLocation';
import SendMail from './SendMail';
const ContactUs = () => {
  return (
    <>
      <GetInTuch />
      <Container>
        <ContactInfo />
        <SendMail />
        <MapLocation />
      </Container>
    </>
  );
};

export default ContactUs;
