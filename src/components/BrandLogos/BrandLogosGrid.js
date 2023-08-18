import React from 'react';

const BrandLogosGrid = ({ heading }) => {
  const brandLogos = [
    'https://www.absolutemotors.eu/wp-content/uploads/2023/04/Urban.png',
    'https://www.absolutemotors.eu/wp-content/uploads/2019/10/AM__1016-600x193.png',
    'https://www.absolutemotors.eu/wp-content/uploads/2020/08/Absolute_Motors_Goodwool.png',
    'https://www.absolutemotors.eu/wp-content/uploads/2020/08/Absolute_Motors_Inozetek1.png',
    'https://www.absolutemotors.eu/wp-content/uploads/2023/04/HRE.png',
    'https://www.absolutemotors.eu/wp-content/uploads/2023/04/Akrapovic.png',
    'https://www.absolutemotors.eu/wp-content/uploads/2023/04/Eventuri.png',
    'https://www.absolutemotors.eu/wp-content/uploads/2023/04/Novitec.png',
    // Add more logo URLs as needed
  ];

  return (
    <div className='bg-gray-700 text-white'>
      <div className='text-center px-4 py-8 md:py-12'>
        <h2 className='text-2xl font-semibold mb-4'>{heading}</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {brandLogos.map((logoUrl, index) => (
            <div key={index} className='flex items-center justify-center'>
              <img
                src={logoUrl}
                alt={`Brand Logo ${index}`}
                className='w-full h-auto'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogosGrid;
