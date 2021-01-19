import React from 'react';
import { useSelector } from 'react-redux';

const CustomDot = ({ onMove, index, onClick, active }) => {
  const data = useSelector((store) => store.testimonial);
  return (
    <li
      className={`${active ? 'active' : 'inactive'} mx-2 rounded-pill`}
      onClick={() => onClick()}
      onMouseMove={() => onMove()}
      style={{ height: 30 }}
    >
      {/* {index + 1} */}
      {data &&
        data.map(
          (item) =>
            index + 1 === item.id && (
              <figure className="rounded-pill border p-1 bg-primary">
                <img
                  src={item.img}
                  alt=""
                  height="80px"
                  className="rounded-pill"
                  width="80px"
                />
              </figure>
            )
        )}
    </li>
  );
};

export default CustomDot;
