import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFax,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const ContactAddr = () => {
  return (
    <div className="addr-main">
      <div className="addr-title">
        <h3>Contact Info</h3>
        <p>We’d love to hear from you! Send us a message?</p>
      </div>
      <div className="addr-list my-5">
        <h3>
          <span className="mx-2">
            <FontAwesomeIcon className="fs-4" icon={faMapMarkerAlt} />
          </span>
          <span className="">Headquarter</span>
        </h3>
        <p className="text-primary">
          25 First Street, 2nd Floor, Delhi, MA 02141 India
        </p>
      </div>
      <div className="addr-list my-5">
        <h3>
          <span className="mx-2">
            <FontAwesomeIcon className="fs-4" icon={faPhoneAlt} />
          </span>
          <span className="">Phone / Fax</span>
        </h3>
        <p className="text-primary">(1+ 888 482 7768)</p>
      </div>
      <div className="addr-list my-5">
        <h3>
          <span className="mx-2">
            <FontAwesomeIcon className="fs-4" icon={faFax} />
          </span>
          <span className="">Fax: </span>
        </h3>
        <p className="text-primary">+1 617 812 5820</p>
      </div>
    </div>
  );
};

export default ContactAddr;
