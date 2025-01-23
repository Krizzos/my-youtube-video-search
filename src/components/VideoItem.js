import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const handleVideoClick = () => {
    onVideoSelect(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const videoItemStyle = {
    width: '200px',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '5px',
  };

  return (
    <div onClick={handleVideoClick} style={videoItemStyle}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={imageStyle}
      />
      <h4 style={{ fontSize: '14px', marginTop: '8px' }}>
        {video.snippet.title}
      </h4>
    </div>
  );
};

export default VideoItem;