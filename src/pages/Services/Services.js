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
      caption:
        'Discover the art of car wrapping, where vehicles become canvases. With precision and creativity, vinyl wraps bring striking colors, unique designs, and branding possibilities to cars.',
    },
    {
      id: 2,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Paint Protection',
      caption: `Experience ultimate paint protection - a shield against the elements. Our advanced solutions, including clear bra films, offer an invisible armor for your vehicle's exterior.`,
    },
    {
      id: 3,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Detailing / Coating',
      caption: `Unveil the brilliance of detailing and coating services, where every inch is perfected. Our experts meticulously clean, enhance, and protect your vehicle's surfaces.`,
    },
    {
      id: 4,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'ECU Tuning',
      caption:
        "Unlock your vehicle's true potential with ECU tuning. Our precision recalibration optimizes engine performance, unleashing power, torque, and efficiency.",
    },
    {
      id: 5,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Exhaust Systems',
      caption:
        'Elevate your driving soundtrack with our high-performance exhaust systems. Meticulously crafted for power and sound, our offerings deliver exhilarating tones and enhanced engine airflow.',
    },
    {
      id: 6,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Engine Upgrades',
      caption:
        'Unleash the heart of your vehicle with our precision engine upgrades. From enhanced power and responsiveness to improved fuel efficiency, our expert modifications take performance to the next level.',
    },
    {
      id: 7,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Wheels and Tires',
      caption:
        "Elevate your ride with our curated selection of wheels and tires. Whether it's sporty elegance or off-road prowess you seek, our range offers top-tier performance and style.",
    },
    {
      id: 8,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Brake Caliper Painting',
      caption:
        'Add a touch of personal style and distinction to your vehicle through our brake caliper painting service. With a spectrum of vibrant colors and meticulous attention to detail.',
    },
    {
      id: 9,
      image:
        'https://www.absolutemotors.eu/wp-content/uploads/2020/08/absolute_motors_carwrapping_330x214.jpg',
      heading: 'Window Tinting',
      caption:
        'Experience the epitome of sophistication and comfort with our window tinting service. Our expert application of premium tint films enhances privacy, reduces glare, and shields interiors from harmful UV rays.',
    },
    // Add more tiles as needed
  ];

  const Tile = ({ image, heading, caption }) => (
    <div className='p-4'>
      <div className='bg-yellow-400 rounded-lg shadow-lg p-4 hover:bg-yellow-500 hover:shadow-xl transition duration-300'>
        <img src={image} alt={heading} className='mb-4' />
        <h3 className='text-lg font-extrabold mb-2'>{heading}</h3>
        <p className='text-gray-600 text-sm'>{caption}</p>
      </div>
    </div>
  );

  return (
    <div className=' mx-auto p-8 bg-yellow-300'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold mb-2'>Our Services</h1>
        <p className='text-gray-600 mb-6 py-10'>
          Unveil Brilliance: Our Car Ceramic Coating Services Redefine Vehicle
          Protection and Shine
        </p>
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
