import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactAddress = (props) => {
  const { textColor } = props;
  return (
    <div className="contact-address d-flex flex-wrap justify-content-center justify-content-md-start">
      <div className={`phone my-1 my-md-0 me-3  ${textColor}`}>
        <FontAwesomeIcon icon={faPhone} />
        <span className="ms-2"> + 0000 11 22 33</span>
      </div>
      <div className={`email  ${textColor}`}>
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="ms-2">youremail@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactAddress;
