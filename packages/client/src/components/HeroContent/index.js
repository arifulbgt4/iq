import React from 'react';

import Calendly from 'src/components/Calendly';
import LergerText from '../LergerText';

const HeroContent = (props) => {
  const { title, description } = props;
  const url = 'https://calendly.com/arifulbgt4/15min';

  return (
    <div className="banner-content text-center">
      <LergerText text={title} maxLength={23} />
      <p className="banner-content-description text-capitalize">
        {description}
      </p>
      <Calendly url={url} />
    </div>
  );
};

export default HeroContent;
