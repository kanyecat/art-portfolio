import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import styles from '../style';
import { motion } from 'framer-motion';

import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { navVariants } from '../motion';
import "./gallery.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false); 

  return (
    <motion.nav
      variants = {navVariants}
      initial="hidden"
      whileInView="show"
      className='w-full flex py-6 justify-between items-center navbar border-b-[1px] border-b-[#3f3r45]"'>
      <h1 className='JHK'>
        <Link to='/' className='font-arimo font-normal text-white xs:text-[18px] text-[17px] nav-link xs:leading-[10.8px] leading-[10.8px] w-[120px]'>
            <span className='jooheekim'>
              <span className='jooheekim-en'>Joo Hee Kim</span>
              {/* <span className='jooheeekim-kr'>김주희</span> */}
            </span>
        </Link>
      </h1>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`button-effect font-arimo font-normal cursor-pointer text-
            [16px] ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'} 
            text-white`}
          >
            <Link to={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu} 
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0
            mx-4 my-2 min-w-[140px] sidebar`}
          >
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-arimo font-normal cursor-pointer text-
                  [16px] ${index === navLinks.length - 1 ? 'mr-0': 'mb-5'} 
                  text-white`}
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
      </div>

    </motion.nav>
  )
}

export default Navbar