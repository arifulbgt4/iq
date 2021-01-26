import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ParallaxProvider } from 'react-skrollr';

import { fatchCarrer } from 'src/state/ducks/carrer';
import CarrerItem from 'src/components/CarrerItem';
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
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 900,
        smoothScrolling: true,
        forceHeight: false,
      }}
      getScrollTop={(scrollTop) => console.log('scrollTop', scrollTop)}
    >
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
    </ParallaxProvider>
  );
};

export default Carrer;
