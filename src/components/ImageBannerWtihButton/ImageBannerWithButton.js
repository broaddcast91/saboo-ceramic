import React from 'react';

const ImageBannerWithButton = ({ imageUrl, buttonText }) => {
  return (
    <div className='relative'>
      <img src={imageUrl} alt='Banner' className='w-full h-auto' />
      <button className='absolute bottom-0 left-0 bg-gray-900 hover:bg-gray-400 text-white font-bold py-1 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded md:ml-4 lg:ml-6 md:mb-4 md:py-3 md:px-6 lg:py-2 lg:px-6'>
        {buttonText}
      </button>
    </div>
  );
};

export default ImageBannerWithButton;
