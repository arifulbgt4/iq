import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fatchCarrer } from 'src/state/ducks/carrer';
import CarrerItem from 'src/components/CarrerItem';

import image1 from 'src/assets/image/carrer/carrer1.png';
import image2 from 'src/assets/image/carrer/carrer2.png';
import image3 from 'src/assets/image/carrer/carrer3.png';
import image4 from 'src/assets/image/carrer/carrer4.png';
import image5 from 'src/assets/image/carrer/carrer5.png';
import Apply from './Apply';

const Carrer = () => {
  const { data, loading } = useSelector((store) => store.carrer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchCarrer());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }

  return (
    <Container className="carrer mb-5">
      {data &&
        data.map((item) => {
          const image = process.env.API_URL + item.image.url;

          return (
            <CarrerItem
              key={item.id}
              img={image}
              title={item.title}
              id={item.id}
            >
              <p>{item.description}</p>
            </CarrerItem>
          );
        })}
      <Apply />
    </Container>
  );
};

export default Carrer;
