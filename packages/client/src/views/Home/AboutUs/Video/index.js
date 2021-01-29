import React from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  PlayToggle,
  BigPlayButton,
} from 'video-react';

const Video = (props) => {
  const { poster, source } = props;
  return (
    <div className="about-us-video d-flex justify-content-center align-items-center">
      <Player poster={poster} src={source}>
        <BigPlayButton position="center" />
        <ControlBar>
          <PlayToggle />
          <VolumeMenuButton />
          <CurrentTimeDisplay />
          <PlaybackRateMenuButton />
          <ReplayControl />
          <ForwardControl />
        </ControlBar>
      </Player>
    </div>
  );
};

export default Video;
