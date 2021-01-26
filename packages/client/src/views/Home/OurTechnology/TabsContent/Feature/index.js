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
  const { id, title, feature, description } = props;
  const prevScrollY = useRef(0);
  const ref = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // console.log(currentScrollY);
      // if (
      //   ref.current.offsetTop < currentScrollY ||
      //   ref.current.clientHeight + ref.current.offsetTop > currentScrollY
      // ) {
      //   console.log('object', id);
      // }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY, ref]);
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
            {feature}
          </CardSubtitle>
        </Parallax>
        <Parallax data={scroll.data}>
          <CardTitle tag="h1" className="feature-left-title pb-1 text-white">
            {title}
          </CardTitle>
        </Parallax>
        <Parallax data={scroll.data}>
          <CardText className="feature-left-text text-white">
            {description}
          </CardText>
        </Parallax>
        <Parallax data={scroll.data}>
          <div className="feature-left-button d-flex mt-3 justify-content-center justify-content-lg-start">
            <Link to="/contact" className="btn btn-secondary text-white">
              contact us
            </Link>
          </div>
        </Parallax>
      </Card>
    </div>
  );
};

export default Feature;
