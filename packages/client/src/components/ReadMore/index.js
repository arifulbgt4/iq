// External Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MoreDetails = ({ text, maxLength, id }) => {
  const MIN_TEXT = text.length > maxLength ? text.slice(0, maxLength) : text;
  const [content, setContent] = useState(MIN_TEXT);

  return (
    <div className="more-details-item">
      <p className="d-inline-block">{`${content}  ...`}</p>
      <Link
        to={`/blog/${id}`}
        color="primary"
        className="text-white bg-primary p-2"
      >
        Read more
      </Link>
    </div>
  );
};

export default MoreDetails;
