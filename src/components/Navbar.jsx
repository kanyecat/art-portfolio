import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import styles from '../style';
import { motion } from 'framer-motion';

import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { navVariants, fadeIn, slideIn, staggerContainer } from '../motion';
import { Work } from '../components';
import "./gallery.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false); 

  return (
    <motion.nav
      variants = {navVariants}
      initial="hidden"
      whileInView="show"
      className='w-full flex py-6 justify-between items-center navbar border-b-[1px] border-b-[#3f3r45]'>
      <h1 className='JHK z-30'>
        <Link to='/' className='font-arimo font-normal text-white xs:text-[18px] text-[17px] nav-link xs:leading-[10.8px] leading-[10.8px] w-[120px]'>
            <span className='jooheekim'>
              <span className='jooheekim-en'>JOO HEE KIM</span>
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

      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img 
          src={menu}
          alt='menu'
          className={`w-[25px] h-[25px] object-contain z-30 ${toggle && "animate-turn"}`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'}`}
        >
          <div className='blur w-[100%] h-[100%] fixed top-0 right-0 overflow-y-hidden z-10'/>
          <div
          className={`bg-hanji-transparent fixed top-0 right-0
          w-[100%] h-[100%] z-20 sidebar overflow-y-hidden`}
          />
          <ul className='fixed z-30 w-[100%] h-[100%] top-0 right-0 list-none flex flex-col mt-40 h-[400px] justify-start items-start flex-1'>
            {navLinks.map((nav, index) => (
              <motion.li
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25}}
                variants={fadeIn('left', 'spring', index*0.5, 0.65)}
                key={nav.id}
                className={`font-arimo font-normal cursor-pointer text-[24px] pb-5 pl-8
                text-white `}
              >
                <Link to={nav.link} onClick={() => setToggle(false)}>{nav.title}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

    </motion.nav>
  )
}

export default Navbar