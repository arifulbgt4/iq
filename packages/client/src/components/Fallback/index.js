import React from 'react';
import preloader from 'src/assets/image/preloader.gif';

const Fallback = () => {
  return (
    <div className="fallback-loader">
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Fallback;
