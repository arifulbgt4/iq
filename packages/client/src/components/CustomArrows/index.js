import * as React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div className="custom-arrows d-block text-center position-absolute">
      <Button
        className="p-0 bg-transparent border-0 btn-left"
        onClick={previous}
      >
        <FontAwesomeIcon className="text-secondary" icon={faArrowCircleLeft} />
      </Button>
      <Button
        className="p-0 bg-transparent border-0 btn-right position-relative"
        onClick={next}
      >
        <FontAwesomeIcon className="text-secondary" icon={faArrowCircleRight} />
      </Button>
    </div>
  );
};
export default CustomButtonGroupAsArrows;
