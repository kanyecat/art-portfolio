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
      <h1 className='JHK'>
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

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={menu}
          alt='menu'
          className={`w-[25px] h-[25px] object-contain ${toggle && "animate-turn"}`}
          onClick={() => setToggle((prev) => !prev)}
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
            variants={fadeIn('left', 'spring', 0.5, 0.65)}
            className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0
            mx-6 my-2 min-w-[140px] `}
          >
            <ul className='list-none flex flex-col justify-end items-start flex-1'>
              {navLinks.map((nav, index) => (
                <motion.li
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25}}
                  variants={fadeIn('right', 'spring', index*0.75, 0.65)}
                  key={nav.id}
                  className={`font-arimo font-normal cursor-pointer text-
                  [16px] ${index === navLinks.length - 1 ? 'mr-0': 'mb-5'} 
                  text-white`}
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
      </div>

    </motion.nav>
  )
}

export default Navbar