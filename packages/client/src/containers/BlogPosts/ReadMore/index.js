// External Component
import React, { useState } from 'react';
import { CardText } from 'reactstrap';

const MoreDetails = ({ text, maxLength }) => {
  const MIN_TEXT = text.length > maxLength ? text.slice(0, maxLength) : text;
  const [content, setContent] = useState(MIN_TEXT);

  return (
    <CardText className="blog-card-body_description pt-2 text-capitalize">{`${content}  ...`}</CardText>
  );
};

export default MoreDetails;
