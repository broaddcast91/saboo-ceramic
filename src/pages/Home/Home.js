import React from 'react';
import Header from '../../components/Header'
import Slider from '../../components/Slider';
import ImageArticle from '../../components/ImageArticle/ImageArticle';
import YoutubeThumbnails from '../../components/YouTubeThumbnails/YoutubeThumbnails';
import SubscriptionOption from '../../components/SubscriptionOption/SubscriptionOption';
import ImageBannerWithButton from '../../components/ImageBannerWtihButton/ImageBannerWithButton';
import NewsSection from '../../components/NewsArticle/NewsArticle';
import BrandLogosGrid from '../../components/BrandLogos/BrandLogosGrid';
import ProjectsThumbnails from '../../components/ProjectLayout/ProjectThumbnail';
import CenteredContactForm from '../../components/ContactForm/CenteredContactForm';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/ceramic-pro/images/Screenshot_2023-08-18_at_5.44.30_PM-removebg-preview.png',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/ceramic-pro/images/Screenshot_2023-08-18_at_5.44.30_PM-removebg-preview.png',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 1',
    imageUrl:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/ceramic-pro/images/Screenshot_2023-08-18_at_5.44.30_PM-removebg-preview.png',
  },
  {
    title: 'Project 4',
    description: 'Description of Project 2',
    imageUrl:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/ceramic-pro/images/Screenshot_2023-08-18_at_5.44.30_PM-removebg-preview.png',
  },
  // Add more projects
];


const Home = () => {
  return (
    <>
    <Header />
      <Slider />
      <ImageArticle
        imageSrc='image-url'
        title='Article Title'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero ac ultrices venenatis.'
        buttonText='Read More'
      />
      <YoutubeThumbnails
        heading='Welcome to Our Website'
        caption='Discover amazing content and explore our services.'
      />
      <SubscriptionOption
        title='Monthly Subscription'
        description='Get access to exclusive content every month.'
      />
      <ImageBannerWithButton
        imageUrl='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/arena-new-banner-dec23.webp'
        buttonText='Learn More'
      />
      <NewsSection />
      <SubscriptionOption
        title='News Archive'
        description='Get access to exclusive News content every month.'
      />
      <BrandLogosGrid heading='Our Brand Partners' />
      <ProjectsThumbnails projects={projects} />
      <CenteredContactForm />
  </>
  );
};

export default Home;
