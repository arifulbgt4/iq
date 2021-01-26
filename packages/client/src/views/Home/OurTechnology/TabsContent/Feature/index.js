import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Parallax } from 'react-skrollr';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 0;transform: scaleY(0.5);',
    'data-center-center': 'opacity: 1;transform: scaleY(1)',
    'data-bottom-top': 'opacity:0;transform: scaleY(0.5);',
  },
};

const Feature = (props) => {
  const { id, title } = props;
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      console.log('ref', ref.current.clientHeight, id);
    }
  }, [ref]);
  return (
    <div ref={ref} className="feature">
      <Card
        body
        className="feature-left text-capitalize bg-transparent border-0 text-center text-lg-start"
      >
        <Parallax data={scroll.data}>
          <CardSubtitle
            tag="h5"
            className="feature-left-subtitle mb-2 pb-1 text-white"
          >
            {title}
          </CardSubtitle>
        </Parallax>
        <Parallax data={scroll.data}>
          <CardTitle tag="h1" className="feature-left-title pb-1 text-white">
            Example @
          </CardTitle>
        </Parallax>
        <Parallax data={scroll.data}>
          <CardText className="feature-left-text text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's
          </CardText>
        </Parallax>
        <Parallax data={scroll.data}>
          <div className="feature-left-button d-flex mt-3 justify-content-center justify-content-lg-start">
            <Link to="#" className="btn btn-secondary text-white">
              contact us
            </Link>
          </div>
        </Parallax>
      </Card>
    </div>
  );
};

export default Feature;
