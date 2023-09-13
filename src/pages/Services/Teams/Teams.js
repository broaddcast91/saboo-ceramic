import React from 'react';
import Header from '../../../components/Header';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: `The Visionary leader behind Saboo Detailing. With innovation and a commitment to excellence, they've made Saboo Detailing a trailblazer in vehicle ceramic coatings.`,
    image:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg', // Replace with actual image file
    linkedIn: '#', // Replace with actual LinkedIn profile
    twitter: '#', // Replace with actual Twitter profile
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Manager',
    bio: `Our Marketing Manager, is the driving force behind our brand's success. With creative strategies and a passion for automotive excellence, they lead our marketing efforts, ensuring our ceramic coatings shine in the spotlight.`,
    image:
      'https://thumbs.dreamstime.com/b/portrait-mature-man-smiling-camera-72705424.jpg',
    linkedIn: '#',
    instagram: '#', // Replace with actual Instagram profile
  },
  {
    name: 'Michael Johnson',
    role: 'Car Wrapper',
    bio: `Meet our skilled Car Wrapper, Michael. With meticulous attention to detail and a flair for design, they transform vehicles into stunning works of art. Elevate your car's aesthetics with their expertise.`,
    image:
      'https://thumbs.dreamstime.com/b/man-perfect-brilliant-smile-unshaven-face-defocused-background-guy-happy-emotional-expression-outdoors-bearded-man-124640934.jpg',
    github: '#', // Replace with actual GitHub profile
    portfolio: '#', // Replace with actual portfolio link
  },
];

const Teams = () => {
  return (
    <>
      <Header />
      <div className='bg-yellow-300 py-12'>
        <div className='container mx-auto'>
          <h1 className='text-3xl text-center font-semibold mb-8'>
            Meet Our Team
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-yellow-400 rounded-lg shadow-lg p-4 hover:bg-yellow-500 hover:shadow-xl transition duration-300'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-64 object-cover rounded-t-lg'
                />
                <div className='p-6'>
                  <h2 className='text-xl font-semibold mb-2'>{member.name}</h2>
                  <p className='text-gray-700 text-sm'>{member.role}</p>
                  <p className='text-gray-600 mt-4'>{member.bio}</p>
                  <div className='mt-4'>
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        className='text-blue-500 hover:underline mr-2'
                      >
                        LinkedIn
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className='text-blue-500 hover:underline mr-2'
                      >
                        Twitter
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        className='text-blue-500 hover:underline mr-2'
                      >
                        Instagram
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className='text-blue-500 hover:underline mr-2'
                      >
                        GitHub
                      </a>
                    )}
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        className='text-blue-500 hover:underline'
                      >
                        Portfolio
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
