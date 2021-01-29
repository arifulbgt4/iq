import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';

import SectionTitle from 'src/components/SectionTitle';
import Founder from './Founder';

const OurFounder = () => {
  const { data } = useSelector((store) => store.founder);

  const { title, name, description, history } = data;
  const image = process.env.API_URL + data.image.url;

  return (
    <section className="our-founder">
      <div className="dropdown-mark"/>
      <Container>
        {title && <SectionTitle title={title} border={false} />}
        <Founder
          image={image}
          name={name}
          description={description}
          history={history}
        />
      </Container>
    </section>
  );
};

export default OurFounder;
