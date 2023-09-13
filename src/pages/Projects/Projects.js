import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import React, { useState } from 'react';

import Header from '../../components/Header';
import CenteredContactForm from '../../components/ContactForm/CenteredContactForm';

const CenteredHeadingDescription = ({ heading, description }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center py-20 px-10'>
      <h1 className='text-3xl font-semibold mb-4'>{heading}</h1>
      <p className='text-gray-600 max-w-lg mx-auto'>{description}</p>
    </div>
  );
};

export function Projects() {
  return (
    <>
      <Header />
      <div className='bg-yellow-300 min-h-screen'>
        <CenteredHeadingDescription
          heading='Our Projects'
          description='AT SABOO DETAILING, WE PRIDE OURSELVES ON DELIVERING AUTOMOTIVE PERFECTION, METICULOUSLY TAILORED TO FULFILL THE DREAMS OF OUR ESTEEMED CLIENTS. LET US MAKE YOUR AUTOMOTIVE DREAM A REALITY.'
        />
        <CustomTabs />
      </div>
      <CenteredContactForm />
    </>
  );
}

export function CardDefault({ title, description }) {
  return (
    <Card className='mt-6 w-96 rounded'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
          alt='card'
        />
      </CardHeader>
      <CardBody>
        <Typography variant='h5' color='blue-gray' className='mb-2'>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button className='p-3 hover:bg-slate-300 hover:text-slate-950'>
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}

const Tab = ({ title, isActive, onClick }) => (
  <button
    className={`p-2 font-bold ${
      isActive ? 'text-blue-500' : 'text-gray-500'
    } font-bold focus:outline-none`}
    onClick={onClick}
  >
    {title}
  </button>
);

const TabsBody = ({ children, animate }) => {
  return (
    <div className={`mt-4 ${animate ? 'transition-all duration-300' : ''}`}>
      {children}
    </div>
  );
};

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    {
      title: 'Bentley',
      content: (
        <CardDefault
          title='Bentley'
          description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
        />
      ),
    },
    {
      title: 'BMW',
      content: <CardDefault title='BMW' description='Description for BMW.' />,
    },
    {
      title: 'Ferrari',
      content: (
        <CardDefault title='Ferrari' description='Description for Ferrari.' />
      ),
    },
    {
      title: 'All',
      content: <CardDefault title='All' description='Description for All.' />,
    },
  ];

  return (
    <div className='bg-yellow-300 min-h-screen p-2'>
      <div className='flex space-x-4 justify-center mr-2'>
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <TabsBody animate={true}>
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md ${
              activeTab === index ? 'block' : 'hidden'
            }`}
          >
            {Array.from({ length: 6 }, (_, cardIndex) => (
              <CardDefault
                key={cardIndex}
                title={`Card ${index + 1}-${cardIndex + 1}`}
                description={`Description for Card ${index + 1}-${
                  cardIndex + 1
                }`}
              />
            ))}
          </div>
        ))}
      </TabsBody>
    </div>
  );
};

export default CustomTabs;
