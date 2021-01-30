import React from 'react';

const LargerText = ({ text, maxLength }) => {
  return (
    <h1
      className={`banner-content-heading text-capitalize fw-bolder ${
        text.length > maxLength ? 'large-text' : 'small-text'
      }`}
    >
      {text}
    </h1>
  );
};

export default LargerText;
