import React from 'react';
import { Button } from 'reactstrap';

const BannerContent = () => {
  return (
    <div className="banner-content">
      <h1 className="banner-content-heading text-capitalize">
        Trust. Trade. Triumph.
      </h1>
      <p className="banner-content-description text-capitalize">
        Is filled with individuals who know the price everything,but the value
        of nothing.
      </p>
      <Button className="rounded-pill px-4" color="primary">
        Shedule an appointment
      </Button>
    </div>
  );
};

export default BannerContent;
