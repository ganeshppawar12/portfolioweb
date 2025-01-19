import React from 'react'

const About = () => (
    <section className="container mx-auto my-16 px-4 text-center">
      <h2 className="text-4xl font-semibold mb-8">About Me</h2>
      <p className="text-lg text-gray-700 leading-8">
        I am a Frontend Developer with experience in ReactJS, Tailwind CSS, and JavaScript. My focus is on building intuitive and responsive web interfaces that improve user experience and engagement.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['ReactJS', 'Tailwind CSS', 'JavaScript', 'MongoDB'].map((skill, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold text-blue-500">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );

export default About