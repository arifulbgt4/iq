import React from 'react';
import { useSelector } from 'react-redux';
import { Parallax } from 'react-skrollr';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1; transform: translate(0%, -20%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0.5;transform: translate(0%, 40%);',
  },
};

const CustomDot = ({ index, onClick, active }) => {
  const { data } = useSelector((store) => store.testimonial);
  return (
    data &&
    data.map((item) => {
      const image = process.env.REACT_APP_API_URL + item.image.url;
      if (index + 1 === item.id) {
        return (
          <li
            className={`${
              active ? 'active' : 'inactive'
            } mx-2 rounded-pill dot-item`}
            onClick={() => onClick()}
            key={item.id}
          >
            <Parallax data={scroll.data}>
              <figure
                className={`rounded-pill ${active && 'border p-1 bg-primary'} `}
              >
                <img
                  src={image}
                  alt=""
                  height="136px"
                  className="rounded-pill"
                  width="136px"
                />
              </figure>
            </Parallax>
          </li>
        );
      }
    })
  );
};

export default CustomDot;
