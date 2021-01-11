import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ValuesCard from 'src/components/ValuesCard';
const Home = () => {
  return (
    <div>
      <h2 className="text-center my-4 titlef">Our Valus</h2>
      <ValuesCard />
    </div>
  );
};

export default Home;
