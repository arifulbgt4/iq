import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fatchFounder } from 'src/state/ducks/founder';
import SectionTitle from 'src/components/SectionTitle';
import Founder from './Founder';

const OurFounder = () => {
  const { data, loading } = useSelector((store) => store.founder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchFounder());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }

  const { title, name, description, history } = data;
  const image = process.env.API_URL + data.image.url;

  return (
    <section className="our-founder">
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
