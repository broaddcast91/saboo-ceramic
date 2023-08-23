import React from 'react';

const ImageArticle = ({ imageSrc, title, text, buttonText }) => {
  return (
    <div className='bg-yellow-400 '>
      <div className='flex flex-col items-center  justify-center lg:flex-row lg:justify-between p-4 md:p-8 lg:p-12 shadow-md'>
        <div className='max-w-md mb-6 lg:mb-0 lg:w-1/2 pr-0 lg:pr-6'>
          <img
            src={
              'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/ceramic-pro/images/Screenshot_2023-08-18_at_5.44.30_PM-removebg-preview.png'
            }
            alt={title}
            className='w-full h-auto'
          />
        </div>
        <div className='max-w-md lg:w-1/2'>
          <h2 className='text-xl font-semibold mb-4'>{title}</h2>
          <p className='text-gray-700 mb-4'>{text}</p>
          <button className='bg-gray-900 hover:bg-gray-400 text-white px-4 py-2 rounded border-b-4 border-gray-700 hover:border-gray-500'>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageArticle;
