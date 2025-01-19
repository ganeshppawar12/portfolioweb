import React from 'react'
import { NavLink } from 'react-router-dom';

const HeroSection = () => (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-4">Hi, I'm Ganesh Pawar</h2>
      <p className="text-lg max-w-2xl">A Frontend Developer passionate about creating interactive, responsive, and user-friendly web applications.</p>
      <div className="mt-8">
        <NavLink to="/projects" className="bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700">View My Work</NavLink>
      </div>
    </section>
  );

export default HeroSection