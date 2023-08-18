import React from 'react';

const ImageBannerWithButton = ({ imageUrl, buttonText }) => {
  return (
    <div className='relative'>
      <img src={imageUrl} alt='Banner' className='w-full h-auto' />
      <button className='absolute bottom-0 left-0 bg-blue-500 text-white px-4 py-2 rounded mb-4 ml-4 md:ml-8 lg:ml-12'>
        {buttonText}
      </button>
    </div>
  );
};

export default ImageBannerWithButton;
