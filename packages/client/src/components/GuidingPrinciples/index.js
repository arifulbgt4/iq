import React from 'react';

const GuidingPrinciples = (props) => {
  const { img, title, description, style } = props;
  return (
    <div className={`mx-2 d-flex ${style} mb-5`}>
      <div className="d-flex h-100 align-items-center card-width">
        <img className="px-4 custrom-img" src={img} alt="idea" />
        <div className="text-capitalize">
          <h4 className="fw-bold">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GuidingPrinciples;
