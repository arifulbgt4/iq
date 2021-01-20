import React from 'react';
import { Container } from 'reactstrap';
import ContactInfo from './ContactInfo';
import GetInTuch from './GetInTuch';
import SendMail from './SendMail';
const index = () => {
  return (
    <>
      <GetInTuch />
      <Container>
        <ContactInfo />
        <SendMail />
      </Container>
    </>
  );
};

export default index;
