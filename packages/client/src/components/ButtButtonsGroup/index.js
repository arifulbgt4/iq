import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const ButtonsGroup = () => {
  const history = useHistory();
  return (
    <div className="text-end align-self-center justify-content-end d-flex hbtns pb-sm-3 pb-lg-0">
      <Button
        onClick={() => history.push('/fdfd')}
        className="rounded-pill px-4 me-3 "
        color="primary"
      >
        Trade Now
      </Button>
      <Button
        onClick={() => history.push('/fdfd')}
        outline
        className="rounded-pill px-4"
        color="primary"
      >
        My IQ A/C
      </Button>
    </div>
  );
};

export default ButtonsGroup;
