import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Select a video to view details</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe
          width="100%"
          height="400"
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
          title="Video Player"
        ></iframe>
      </div>
      <div>
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
