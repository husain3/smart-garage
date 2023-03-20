import '../styles/VideoStreamWidget.css';
import React, { Component, useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import Widget from './Widget';


function VideoStreamWidget({ videoTitle, videoUrl }) {
  const [videoUrlState, setVideoUrlState] = useState(videoUrl + Date.now().toString());

  useEffect(() => {
    setTimeout(() => {
      setVideoUrlState(videoUrl + Date.now().toString());
    }, 2500);
  }, [videoUrlState]);

  return (
      <div className="Widget1">
        <img src={videoUrlState}  class="img-fluid" alt="Loading image..." width="100%" height="auto" object-fit="contain"/>
      </div>
  );
}
export default VideoStreamWidget;