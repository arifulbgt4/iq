import React from 'react';
import TitleComponent from 'src/components/TitleFirst';
const TitleFirst = () => {
  return (
    <>
      <TitleComponent title="Why Chose Us" />
      <p className="text-center  text-secondary testamonytext">
        That is another testament to the fact that investing without an
        education and research will ultimaely ledebts that seem sensible during
        periods of prosperity. When a crisis comes, individuals,companies and
        even governments that run up debts during the boom usually suffer the
        most.
      </p>
      <div className="d-flex justify-content-center my-4">
        <div className="textbottomboder  me-2 "></div>
        <div className="textbottomboder ms-2"></div>
      </div>
    </>
  );
};

export default TitleFirst;
