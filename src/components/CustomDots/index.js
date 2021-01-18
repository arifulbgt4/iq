import React from 'react';
import { useSelector } from 'react-redux';

const CustomDot = ({ onMove, index, onClick, active }) => {
  const data = useSelector((store) => store.testimonial);
  return (
    <li
      className={active ? 'active' : 'inactive'}
      onClick={() => onClick()}
      style={{ height: 30 }}
    >
      {index + 1}
      {data &&
        data.map(
          (item) =>
            index + 1 === item.id && <img src={item.img} alt="" height="20px" />
        )}
    </li>
  );
};

export default CustomDot;
