import React from 'react';

const SubscriptionOption = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center bg-yellow-400 shadow-md px-4 py-6 md:p-6'>
      <div className='text-center mb-4'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-gray-600 mt-2'>{description}</p>
      </div>
      <button className='flex mx-auto bg-gray-900 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded'>
        Read More
      </button>
    </div>
  );
};

export default SubscriptionOption;
