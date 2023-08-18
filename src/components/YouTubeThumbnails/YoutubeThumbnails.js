import React from 'react';
import YouTube from 'react-youtube';

const YoutubeThumbnails = ({ heading, caption }) => {
  return (
    <div className='bg-yellow-400'>
      <div className='text-center px-4 py-8 md:py-12'>
        <h2 className='text-3xl font-semibold mb-2'>{heading}</h2>
        <p className='text-gray-600'>{caption}</p>
      </div>
      <PlayableYoutubeVideos />
    </div>
  );
};

const PlayableYoutubeVideos = () => {
  const videos = ['8NKoOezagKY', 'VIDEO_ID_2', 'VIDEO_ID_3'];

  const opts = {
    width: '100%', // Adjust as needed
    height: '200', // Adjust as needed
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='px-4 py-6 md:px-12 lg:px-16 xl:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {videos.map((videoId) => (
          <div key={videoId} className='w-full m-2'>
            <YouTube videoId={videoId} opts={opts} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeThumbnails;
