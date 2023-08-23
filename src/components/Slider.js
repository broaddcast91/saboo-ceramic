import React from 'react';
import { Link } from 'react-router-dom';

const ImageBannerWithButton = ({ imageUrl, buttonText, linkTo }) => {
  return (
    <div className='relative'>
      <img src={imageUrl} alt='Banner' className='w-full h-auto' />
      <Link
        to={linkTo}
        className='absolute bottom-0 left-0 bg-gray-900 hover:bg-gray-400 text-white font-bold py-1 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded md:ml-4 lg:ml-6 md:mb-4 md:py-3 md:px-6 lg:py-2 lg:px-6'
      >
        {buttonText}
      </Link>
    </div>
  );
};

const Slider = () => {
  const slides = [
    {
      image:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/ceramic-pro/images/saboopro-banner-1.webp',
      caption: 'banner-1',
    },
  ];

  return (
    <div className='flex flex-col items-center'>
      {slides.map((slide, index) => (
        <ImageBannerWithButton
          key={index}
          imageUrl={slide.image}
          buttonText={`Go to Slide ${index + 1}`}
          linkTo='/your-page-link' // Replace with the actual link you want to redirect to
        />
      ))}
    </div>
  );
};

export default Slider;
