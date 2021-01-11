import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Values from 'src/components/Values';
const Home = () => {
  return (
    <div>
      <h2 className="text-center my-4 titlef">Our Valus</h2>
      <Values />
    </div>
  );
};

export default Home;
