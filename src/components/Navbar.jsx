import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Routes, Route, Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import Hero from './Hero'
import Analytics from './Analytics';
import Cards from './Cards';
import Newsletters from './Newsletters';
import Footer from './Footer';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>THANH DAT</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-bold z-10'><Link to="/">Home</Link></li>
        <li className='p-4 font-bold z-10'><Link to="/analytics">Analytics</Link></li>
        <li className='p-4 font-bold z-10'><Link to="/newsletters">Newsletters</Link></li>
        <li className='p-4 font-bold z-10'><Link to="/cards">Cards</Link></li>
        <li className='p-4 font-bold z-10'><Link to="/footer">Footer</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden z-10'>
          {nav ? <AiOutlineClose className='z-10' size={20}/> : <AiOutlineMenu className='z-10' size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>THANH DAT</h1>
          <li className='p-4 font-bold border-b border-gray-600'>Home</li>
          <li className='p-4 font-bold border-b border-gray-600'>Company</li>
          <li className='p-4 font-bold border-b border-gray-600'>Resources</li>
          <li className='p-4 font-bold border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
    
  );
};

export default Navbar;
