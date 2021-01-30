import React, { useRef, useState } from 'react';
import {
  Player,
  ControlBar,
  PlaybackRateMenuButton,
  BigPlayButton,
} from 'video-react';
import classnames from 'classnames';

const Video = () => {
  const [fullVideo, setFullVideo] = useState(false);
  const player = useRef(null);

  const handelScroll = () => {
    document.getElementById('vdo').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="vdo"
      className={classnames('d-flex justify-content-center video-area', {
        full: fullVideo,
      })}
    >
      <div className="about-us-video d-flex justify-content-center align-items-center">
        <Player
          ref={player}
          poster="https://video-react.js.org/assets/poster.png"
          onPlay={() => {
            setFullVideo(true);
            handelScroll();
          }}
          onPause={() => setFullVideo(false)}
        >
          <BigPlayButton position="center" />

          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
          <ControlBar
            handleFocus={() => {
              console.log('object');
            }}
          >
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
          </ControlBar>
        </Player>
      </div>
    </div>
  );
};

export default Video;
