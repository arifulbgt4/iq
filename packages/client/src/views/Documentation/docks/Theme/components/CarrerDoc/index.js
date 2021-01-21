import React from 'react';
import CarrerItem from 'src/components/CarrerItem';
import DocCard from 'src/views/Documentation/components/DocCard';
import image1 from 'src/assets/image/carrer/carrer1.png';

const CarrerDoc = () => {
  return (
    <DocCard title="carrer" id="valueCard">
      <div className="w-100">
        <CarrerItem img={image1} title="Want to be part of the team?" id={1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </CarrerItem>
      </div>
    </DocCard>
  );
};

export default CarrerDoc;
