import React from 'react';
import VideoList from './components/video-list';

export default function App() {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/pD_T02kcLWI',
      title: 'Building a Pausable Component Timer in React JS',
      author: 'Mark Tellez',
      viewCount: 0,
      free: false,
    },
    {
      url: 'https://www.youtube.com/embed/3ohRNCa1YaU',
      title: 'Building a CryptoCard React JS component for our live crypto currency dashboard',
      author: 'Mark Tellez',
      viewCount: 11,
      free: true,
    },
  ]

  return (
    <div>
      <VideoList videos={videos} />
    </div>
  );
}