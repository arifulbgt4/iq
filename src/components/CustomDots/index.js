import React from 'react';
import { useSelector } from 'react-redux';

const CustomDot = ({ onMove, index, onClick, active }) => {
  const data = useSelector((store) => store.testimonial);
  return (
    <li
      className={`${active ? 'active' : 'inactive'} mx-2`}
      onClick={() => onClick()}
      onMouseMove={() => onMove()}
      style={{ height: 30 }}
    >
      {/* {index + 1} */}
      {data &&
        data.map(
          (item) =>
            index + 1 === item.id && (
              <img
                src={item.img}
                alt=""
                height="60px"
                className="rounded-pill border"
                width="60px"
              />
            )
        )}
    </li>
  );
};

export default CustomDot;
