import React from 'react';
import { Button } from 'reactstrap';

const ButtonsGroup = () => {
  return (
    <div className="text-end align-self-center justify-content-end d-flex hbtns pb-sm-3 pb-lg-0">
      <Button className="rounded-pill px-4 me-3 " color="primary">
        Trade Now
      </Button>
      <Button outline className="rounded-pill px-4" color="primary">
        My IQ A/C
      </Button>
    </div>
  );
};

export default ButtonsGroup;
