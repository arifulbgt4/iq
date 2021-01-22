import React from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';
import ValuesCard from 'src/components/Values/ValuesCard';
import Highlight from 'react-highlight';
const ValuCardDoc = () => {
  return (
    <DocCard title="Value Card" id="valueCard">
      <Highlight innerHTML={true}>{'j'}</Highlight>
      <Highlight language="javascript">
        {`
import React from 'react';
import { CardHeader, CardBody, CardImg } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

import cardhead from 'src/assets/image/cardhead.png';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.1,
];

const ValuesCard = () => {
  const [property, set] = useSpring(() => ({
          xys: [0, 0, 1],
    config: {
          mass: 10,
      tension: 350,
      friction: 40,
    },
  }));
  return (
    <animated.div
          className="values-card card mt-4"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: property.xys.interpolate(trans) }}
        >
          <CardImg top width="100%" src={cardhead} alt="Card image cap" />
          <CardHeader className="cd-header">Investing</CardHeader>
          <CardBody className="text-secondary">
            Wide diversification is only required when investors do not understand
            what they are doing.
      </CardBody>
        </animated.div>
  );
};

export default ValuesCard;

`}
      </Highlight>
      <div className="w-25">
        <ValuesCard />
      </div>
    </DocCard>
  );
};

export default ValuCardDoc;
