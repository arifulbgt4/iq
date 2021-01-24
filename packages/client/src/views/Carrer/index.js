import React from 'react';
import { Container } from 'reactstrap';

import CarrerItem from 'src/components/CarrerItem';

import image1 from 'src/assets/image/carrer/carrer1.png';
import image2 from 'src/assets/image/carrer/carrer2.png';
import image3 from 'src/assets/image/carrer/carrer3.png';
import image4 from 'src/assets/image/carrer/carrer4.png';
import image5 from 'src/assets/image/carrer/carrer5.png';
import Apply from './Apply';

const Carrer = () => {
  return (
    <Container className="carrer mb-5">
      <CarrerItem img={image1} title="Want to be part of the team?" id={1}>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys</p>
      </CarrerItem>
      <CarrerItem img={image2} title="Why should you join IntelQuest?" id={2}>
        <ul className="p-0 m-0">
          <li className="list-unstyled pb-1">
            -Gain comprehensive understanding about the ins and outs of
            financial markets
          </li>
          <li className="list-unstyled pb-1">
            -Cultivate innovative ideas and creative thinking
          </li>
          <li className="list-unstyled pb-1">
            -Safe space to explore the depths of your curiosity.
          </li>
          <li className="list-unstyled pb-1">
            -Be a part of a team of dynamic individuals
          </li>
          <li className="list-unstyled pb-1">
            -Develop your analytical skills and critical thinking
          </li>
          <li className="list-unstyled pb-1">
            -Expand your network by interacting with diverse groups of people
          </li>
        </ul>
      </CarrerItem>
      <CarrerItem img={image3} title="Ethics and Work Culture" id={3}>
       <p> Whether you're the CEO or a Summer intern, we value your opinions and
        ideas just the same! Polls are conducted regularly to ensure everyone's
        voice is heard </p>
      </CarrerItem>
      <CarrerItem img={image4} title="Equality" id={4}>
      <p>  Take off the masks you wear to avoid discrimination and judgement. We're
        focused on creating a healthy work environment </p>
      </CarrerItem>
      <CarrerItem img={image5} title="Team Spirit" id={5}>
       <p>No high school cliques here, we're that big sappy family you see on the
        default pictures in photo frames </p>
      </CarrerItem>
      <Apply />
    </Container>
  );
};

export default Carrer;
