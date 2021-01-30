import React from 'react';
import { Button } from 'reactstrap';

import LergerText from '../LergerText';

const HeroContent = (props) => {
  const { title, description } = props;
  return (
    <div className="banner-content text-center">
      <LergerText text={title} maxLength={23} />
      <p className="banner-content-description text-capitalize">
        {description}
      </p>
      <Button className="rounded-pill px-4" color="primary">
        Shedule an appointment
      </Button>
    </div>
  );
};

export default HeroContent;
