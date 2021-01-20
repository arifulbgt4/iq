import React from 'react';
import { Container } from 'reactstrap';
import ContactInfo from './ContactInfo';
import GetInTuch from './GetInTuch';
const index = () => {
  return (
    <Container>
      <GetInTuch />
      <ContactInfo />
    </Container>
  );
};

export default index;
