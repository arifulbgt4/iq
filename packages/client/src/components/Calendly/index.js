import React from 'react';
import { Button } from 'reactstrap';
import { openPopupWidget } from 'react-calendly';

const prefill = {
  a1: 'a1',
  a2: 'a2',
  a3: 'a3',
  a4: 'a4',
  a5: 'a5',
  a6: 'a6',
  a7: 'a7',
  a8: 'a8',
  a9: 'a9',
  a10: 'a10',
};

const pageSettings = {
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: '4d5055',
};

const utm = {
  utmCampaign: 'Spring Sale 2019',
  utmSource: 'Facebook',
  utmMedium: 'Ad',
  utmContent: 'Shoe and Shirts',
  utmTerm: 'Spring',
};

const Calendly = (props) => {
  const { url, outline = false, className = '' } = props;

  const openPopup = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return (
    <Button
      onClick={() => {
        url && openPopup();
      }}
      outline={outline}
      className={`rounded-pill px-4 ${className && className}`}
      color="primary"
    >
      Shedule an appointment
    </Button>
  );
};

export default Calendly;
