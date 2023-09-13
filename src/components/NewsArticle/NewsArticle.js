import React from 'react';

const NewsArticle = ({ title, description }) => {
  return (
    <div className='bg-yellow-300 p-4 shadow-md'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Breaking News 1',
      description: 'This is the first breaking news article.',
    },
    {
      id: 2,
      title: 'Breaking News 2',
      description: 'This is the second breaking news article.',
    },
    {
      id: 3,
      title: 'Breaking News 3',
      description: 'This is the third breaking news article.',
    },
  ];

  return (
    <div className='bg-yellow-300'>
      <div className='m-4 md:m-6 '>
        <div className='text-center px-4 py-6 md:py-10'>
          <h2 className='text-3xl font-semibold mb-2'>Latest News</h2>
          <p className='text-gray-600'>News Description</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0'>
          {newsArticles.map((article) => (
            <NewsArticle
              key={article.id}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
