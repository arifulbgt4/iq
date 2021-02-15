import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFax,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-skrollr';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1; ',
    'data-center-center': 'opacity: 1; transform: translate(0%, 0%);',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 300%);',
  },
  data2: {
    'data-top-bottom': 'opacity: 1; ',
    'data-center-center': 'opacity: 1; transform:translate(0%, 0%);',
    'data-bottom-top': 'opacity: 0;transform: translate(-100%, -200%);',
  },
};

const ContactAddr = () => {
  const { data: siteData } = useSelector((store) => store.websiteDetails);

  return (
    <div className="addr-main text-center text-md-left">
      <div className="addr-title">
        <Parallax data={scroll.data2}>
          <p className="fs-1 head">Contact Info</p>
        </Parallax>
        <Parallax data={scroll.data}>
          <p className="title">
            We’d love to hear from you! Send us a message?
          </p>
        </Parallax>
      </div>
      <div className="addr-list my-3 my-lg-5">
        <h3>
          <span className="mx-2">
            <FontAwesomeIcon className="fs-4" icon={faMapMarkerAlt} />
          </span>
          <Parallax data={scroll.data2}>
            <span className="">Headquarter</span>
          </Parallax>
        </h3>
        <Parallax data={scroll.data}>
          <p>{siteData.address}</p>
        </Parallax>
      </div>
      <div className="addr-list my-3 my-lg-5">
        <h3>
          <span className="mx-2">
            <FontAwesomeIcon className="fs-4" icon={faEnvelope} />
          </span>
          <Parallax data={scroll.data2}>
            <span className="">Email</span>
          </Parallax>
        </h3>
        <Parallax data={scroll.data}>
          <a href={`mailto:${siteData.email}`} className="text-dark">
            <p>{siteData.email}</p>
          </a>
        </Parallax>
      </div>
      <div className="addr-list my-3 my-lg-5">
        <h3>
          <span className="mx-2">
            <FontAwesomeIcon className="fs-4" icon={faPhoneAlt} />
          </span>
          <Parallax data={scroll.data2}>
            <span className="">Phone / Fax</span>
          </Parallax>
        </h3>
        <Parallax data={scroll.data}>
          <a href={`tel:${siteData.phone}`} className="text-dark">
            <p>{siteData.phone}</p>
          </a>
        </Parallax>
      </div>
      <div className="addr-list my-3 my-lg-5">
        <h3>
          <span className="mx-2">
            <FontAwesomeIcon className="fs-4" icon={faFax} />
          </span>
          <Parallax data={scroll.data2}>
            <span className="">Fax: </span>
          </Parallax>
        </h3>
        <Parallax data={scroll.data}>
          <p>{siteData.fax}</p>
        </Parallax>
      </div>
    </div>
  );
};

export default ContactAddr;
