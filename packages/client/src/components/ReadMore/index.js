// External Component
import React, { useState } from 'react';

import { Button } from 'reactstrap';

const MoreDetails = ({ text, maxLength }) => {
  const MIN_TEXT = text.length > maxLength ? text.slice(0, maxLength) : text;

  const [content, setContent] = useState(MIN_TEXT);
  const [hidden, setHidden] = useState(true);

  const toggleText = () => {
    if (hidden) {
      setHidden(false);
      setContent(text);
    } else {
      setHidden(true);
      setContent(MIN_TEXT);
    }
  };

  return (
    <div className="more-details-item">
      <p className="d-inline-block">{hidden ? `${content}  ...` : text}</p>
      <Button color="primary" onClick={toggleText} className="text-white">
        Read
        {hidden ? ' more' : ' less'}
      </Button>
    </div>
  );
};

export default MoreDetails;
