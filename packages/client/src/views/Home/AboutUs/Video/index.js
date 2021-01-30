import React, { useRef } from 'react';
import {
  Player,
  ControlBar,
  PlaybackRateMenuButton,
  BigPlayButton,
} from 'video-react';

const Video = () => {
  const player = useRef(null);

  return (
    <div className="about-us-video d-flex justify-content-center align-items-center">
      <Player
        ref={player}
        poster="https://video-react.js.org/assets/poster.png"
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
