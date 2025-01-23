import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  return (
    <div style={videoListStyle}>
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
};

export default VideoList;
