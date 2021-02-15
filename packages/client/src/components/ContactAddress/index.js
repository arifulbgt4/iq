import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const ContactAddress = (props) => {
  const { textColor } = props;

  const { data: siteData } = useSelector((store) => store.websiteDetails);

  return (
    <div className="contact-address d-flex flex-wrap justify-content-center justify-content-md-start">
      <div className={`phone my-1 my-md-0 me-3  ${textColor}`}>
        <FontAwesomeIcon icon={faPhone} />
        <a href={`tel:${siteData.phone}`} className="ms-2">
          {siteData.phone}
        </a>
      </div>
      <div className={`email  ${textColor}`}>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${siteData.email}`} className="ms-2">
          {siteData.email}
        </a>
      </div>
    </div>
  );
};

export default ContactAddress;
