import React from 'react';
import { Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import TitleComponent from 'src/components/TitleFirst';
import working from 'src/assets/image/working.png';

const TitleFirst = () => {
  return (
    <>
      <Col lg={12}>
        <TitleComponent title="Why Choose Us?" />
        <p className="text-center  text-secondary testamonytext">
          Diligently striving towards excellence, we are here to get the most
          for your money.
        </p>
        <div className="check-card posation-card">
          <p className="card-title">Client-Centered</p>
          <div className="d-flex">
            <div className="textbottomboder1  me-2 " />
            <div className="textbottomboder2 ms-2" />
          </div>
          <ul className="list-unstyled mt-4 ">
            <li>
              {' '}
              <FontAwesomeIcon className="list-txt" icon={faCheckSquare} />{' '}
              <span className="mx-2">
                Our clientele is at the heart of everything we do.
              </span>
            </li>
            <li>
              {' '}
              <FontAwesomeIcon className="list-txt" icon={faCheckSquare} />{' '}
              <span className="mx-2">
                We foster a work culture devoted to enhancing our client's
                satisfaction.
              </span>
            </li>
            <li>
              {' '}
              <FontAwesomeIcon className="list-txt" icon={faCheckSquare} />{' '}
              <span className="mx-2">
                We value team spirit and a constructive team that works together
                with our clients.
              </span>
            </li>
            <li>
              {' '}
              <FontAwesomeIcon className="list-txt" icon={faCheckSquare} />{' '}
              <span className="mx-2">
                The streamlined interface caters to the needs of every type of
                investor.
              </span>
            </li>
            <li>
              {' '}
              <FontAwesomeIcon className="list-txt" icon={faCheckSquare} />{' '}
              <span className="mx-2">Less pricing.</span>
            </li>
          </ul>
          <img className=" img-posation" src={working} alt="working" />
        </div>
      </Col>
    </>
  );
};

export default TitleFirst;
