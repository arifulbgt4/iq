import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { ParallaxProvider } from 'react-skrollr';

import CarrerItem from 'src/components/CarrerItem';
import Apply from './Apply';

const Carrer = () => {
  const { data } = useSelector((store) => store.carrer);

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
