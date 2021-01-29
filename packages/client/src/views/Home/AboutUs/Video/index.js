import React, { useEffect, useRef } from 'react';
import {
  Player,
  ControlBar,
  PlaybackRateMenuButton,
  BigPlayButton,
} from 'video-react';

const Video = (props) => {
  // const { poster, source } = props;
  const player = useRef(null);
  // useEffect(() => {
  //   // console.log('player', player.current.actions);
  // }, [player]);

  return (
    <div className="about-us-video d-flex justify-content-center align-items-center">
      <Player
        ref={player}
        poster="https://video-react.js.org/assets/poster.png"
        // src={source}
      >
        <BigPlayButton position="center" />
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
        <ControlBar>
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
        </ControlBar>
      </Player>
    </div>
  );
};

export default Video;
