import React from 'react';

const Projects = () => (
    <section className="container mx-auto my-16 px-4">
      <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Responsive Shopping Website',
            description: 'A shopping platform with add-to-cart and wishlist features.',
            link: 'https://ganeshppawar12.github.io/finalshop/'
          },
          {
            title: 'Nike Website Clone',
            description: 'Clone of Nike website with React Router and Redux.',
            link: 'https://ganeshppawar12.github.io/nikeweb/#/'
          },
          {
            title: 'Task Management System',
            description: 'CRUD application to manage tasks efficiently.',
            link: 'https://ganeshppawar12.github.io/TaskManeger/'
          },
          {
            title: 'Live Weather Forecast App',
            description: 'Fetch real-time weather data based on user location.',
            link: 'https://ganeshppawar12.github.io/weatherToday/'
          }
        ].map((project, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );

  

export default Projects
