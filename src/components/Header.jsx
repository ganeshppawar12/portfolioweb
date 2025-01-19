import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import '../App.css'; // Tailwind CSS setup

// Components
const Header = () => (
  <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 sticky top-0 shadow-lg">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-extrabold">Ganesh Pawar</h1>
      <ul className="flex gap-6">
        <li><NavLink to="/" className="hover:text-yellow-400 text-lg">About</NavLink></li>
        <li><NavLink to="/projects" className="hover:text-yellow-400 text-lg">Projects</NavLink></li>
        <li><NavLink to="/contact" className="hover:text-yellow-400 text-lg">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header