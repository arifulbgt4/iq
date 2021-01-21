import React from 'react';
import { Container } from 'reactstrap';
import ContactInfo from './ContactInfo';
import GetInTuch from './GetInTuch';
import MapLocation from './MapLocation';
import SendMail from './SendMail';
const ContactUs = () => {
  return (
    <>
      <Container>
        <GetInTuch />
        <ContactInfo />
        <SendMail />
        <MapLocation />
      </Container>
    </>
  );
};

export default ContactUs;
