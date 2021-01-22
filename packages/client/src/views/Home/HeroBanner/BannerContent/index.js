import React from 'react';
import { Button } from 'reactstrap';

const BannerContent = () => {
  return (
    <div className="banner-content">
      <h1 className="banner-content-heading text-capitalize fw-bolder">
        Trust. Trade. Triumph.
      </h1>
      <p className="banner-content-description text-capitalize w-75">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
      </p>
      <Button className="rounded-pill px-4" color="primary">
        Shedule an appointment
      </Button>
    </div>
  );
};

export default BannerContent;
