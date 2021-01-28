import React from 'react';
import ReactMarkdown from 'react-markdown';

const GuidingPrinciples = (props) => {
  const { image, title, description, right } = props;
  return (
    <div
      className={`guiding-principle-card mx-2 d-flex mb-5 ${
        right && 'justify-content-end'
      }`}
    >
      <div className="d-flex h-100 align-items-center card-width">
        <img className="px-4 custrom-img " src={image} alt="idea" />
        <div className="guiding-principle-card_description text-capitalize ms-3">
          <h2 className="fw-bold">{title}</h2>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default GuidingPrinciples;
