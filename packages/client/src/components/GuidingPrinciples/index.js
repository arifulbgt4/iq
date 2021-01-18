import React from 'react';
const GuidingPrinciples = (props) => {
  const { img, title, description, style } = props;
  return (
    <div className={`mx-2 d-flex ${style} mb-5`}>
      <div className="d-flex  h-100 w-75">
        <img className="px-4" src={img} alt="idea" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GuidingPrinciples;
