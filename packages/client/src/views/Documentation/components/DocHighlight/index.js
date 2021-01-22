import React from 'react';
import Highlight from 'react-highlight';

const DocHighlight = (props) => {
  const { code } = props;
  return (
    <>
      <p className="mt-3">React Code</p>
      <Highlight className="border-position" language="javascript">
        {code}
      </Highlight>
    </>
  );
};

export default DocHighlight;
