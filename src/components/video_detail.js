import React from 'react';

// es6 trick to pull out just video from props
const VideoDetail = ({video}) => {

  // check if there is a video yet, if not showing "loading"
  if (!video) {
    return <div>Loading...</div>;
  }

  //set the video id and creat the url
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{ video.snippet.title }</div>
        <div>{ video.snippet.description }</div>
      </div>
    </div>
  );
};

export default VideoDetail;
