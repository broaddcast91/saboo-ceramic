import React from 'react';
import Header from '../../components/Header';
import CenteredContactForm from '../../components/ContactForm/CenteredContactForm';

const TilesContainer = () => {
  // Sample data for tiles
  const tilesData = [
    {
      id: 1,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Car Wrapping',
      caption: 'This is the caption for Tile 1',
    },
    {
      id: 2,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Paint Protection',
      caption: 'This is the caption for Tile 2',
    },
    {
      id: 3,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Detailing / Coating',
      caption: 'This is the caption for Tile 3',
    },
    {
      id: 4,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'ECU Tuning',
      caption: 'This is the caption for Tile 1',
    },
    {
      id: 5,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Exhaust Systems',
      caption: 'This is the caption for Tile 2',
    },
    {
      id: 6,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Engine Upgrades',
      caption: 'This is the caption for Tile 3',
    },
    {
      id: 7,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Wheels and Tires',
      caption: 'This is the caption for Tile 1',
    },
    {
      id: 8,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Brake Caliper Painting',
      caption: 'This is the caption for Tile 2',
    },
    {
      id: 9,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Window Tinting',
      caption: 'This is the caption for Tile 3',
    },
    // Add more tiles as needed
  ];

  const Tile = ({ image, heading, caption }) => (
    <div className='p-4'>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <img src={image} alt={heading} className='mb-4' />
        <h3 className='text-lg font-extrabold mb-2'>{heading}</h3>
        <p className='text-gray-600 text-sm'>{caption}</p>
      </div>
    </div>
  );

  return (
    <div className=' mx-auto p-8 bg-yellow-400'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold mb-2'>Our Services</h1>
        <p className='text-gray-600 mb-6'>Description at the top</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {tilesData.map((tile) => (
            <Tile
              key={tile.id}
              image={tile.image}
              heading={tile.heading}
              caption={tile.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className=''>
      <Header />
      {/* <h2 className='text-2xl font-semibold mb-4'>Services</h2> */}
      <TilesContainer />
      <CenteredContactForm />
    </div>
  );
};

export default Services;
