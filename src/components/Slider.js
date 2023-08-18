import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const slides = [
    {
      image:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Website+Maruti+Suzuki+Freedom+Service+August+Independence+Day+Offers+Saboo+RKS+Motor.webp',
      caption: 'Slide 1 Caption',
    },
    {
      image:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Maruti+Suzuki+Arena+Royal+Platinum+Award+.webp',
      caption: 'Slide 2 Caption',
    },
    {
      image:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Maruti+Suzuki+Arena+Brezza+Scng+Offers.webp',
      caption: 'Slide 3 Caption',
    },
  ];

  return (
    <div className='relative'>
      <div className='flex items-center justify-between absolute left-0 top-1/2 transform -translate-y-1/2 px-4 w-full sm:w-auto'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-l'
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-r'
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
      <img
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
        className='w-full'
      />
      {/* <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-white'>
        {slides[currentSlide].caption}
      </div> */}
    </div>
  );
};

export default Slider;
