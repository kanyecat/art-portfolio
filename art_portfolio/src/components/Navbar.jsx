import { useState } from 'react';
import React from "react";
import styles from '../style';
import { motion } from 'framer-motion';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { navVariants } from '../motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false); 

  return (
    <motion.nav
      variants = {navVariants}
      initial="hidden"
      whileInView="show"
      className='w-full flex py-6 justify-between items-center navbar border-b-[1px] border-b-[#3f3r45]"'>
      <h1>
        <a href='/' className='font-arimo font-normal xs:text-[18px] text-[17px] text-white xs:leading-[10.8px] leading-[10.8px] w-[120px]'>
          JOO HEE KIM
        </a>
      </h1>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-arimo font-normal cursor-pointer text-
            [16px] ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'} 
            text-white`}
          >
            <a href={nav.link}>
              {nav.title}
            </a>
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
                  <a href={nav.link}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>

    </motion.nav>
  )
}

export default Navbar