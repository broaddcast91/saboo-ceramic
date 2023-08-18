// ProjectsThumbnails.js
import React from 'react';

const ProjectThumbnail = ({ title, description, imageUrl }) => {
  return (
    <div className='bg-white p-4 shadow-md'>
      <img src={imageUrl} alt={title} className='w-full h-auto' />
      <h3 className='text-xl font-semibold my-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

const ProjectsThumbnails = ({ projects, heading }) => {
  return (
    <div className='bg-yellow-400'>
      <div className='text-center px-4 py-10'>
        <h2 className='text-3xl font-semibold mb-2'>Projects</h2>
        <p className='text-gray-600'>Project Description</p>
      </div>
      <div className='px-4 py-6 md:py-12 rounded-md'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto rounded-md'>
          {projects.map((project, index) => (
            <ProjectThumbnail
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsThumbnails;
