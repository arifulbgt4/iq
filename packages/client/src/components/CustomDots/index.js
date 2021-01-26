import React from 'react';
import { useSelector } from 'react-redux';
import { Parallax } from 'react-skrollr';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1; transform: translate(0%, -20%);',
    'data-center-center': 'opacity: 0.7;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 40%);',
  },
};

const CustomDot = ({ onMove, index, onClick, active }) => {
  const data = useSelector((store) => store.testimonial);
  return (
    <li
      className={`${active ? 'active' : 'inactive'} mx-2 rounded-pill dot-item`}
      onClick={() => onClick()}
    >
      {/* {index + 1} */}
      {data &&
        data.map(
          (item, i) =>
            index + 1 === item.id && (
              <Parallax data={scroll.data}>
                <figure
                  key={i}
                  className={`rounded-pill ${
                    active && 'border p-1 bg-primary'
                  } `}
                >
                  <img
                    src={item.img}
                    alt=""
                    height="136px"
                    className="rounded-pill"
                    width="136px"
                  />
                </figure>
              </Parallax>
            )
        )}
    </li>
  );
};

export default CustomDot;
