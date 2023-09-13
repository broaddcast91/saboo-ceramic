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
    <div class='bg-gray-700 text-white  flex flex-col items-center justify-center'>
      <div class='text-center px-4 py-8 md:py-12 max-w-m'>
        <h2 class='text-2xl p-4 font-semibold mb-8'>{heading}</h2>
        <div class='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-m'>
          {brandLogos.map((logoUrl, index) => (
            <div key={index} class='flex items-center justify-center'>
              <img
                src={logoUrl}
                alt={`Brand Logo ${index}`}
                class='w-32 md:w-auto h-auto max-h-16'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogosGrid;
