import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import { menu } from '../assets';
import { navLinks } from '../constants';
import { navVariants, fadeIn, slideIn, staggerContainer } from '../motion';
import "./gallery.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false); 
  const [drop, setDrop] = useState(false);
  const reset = () => {
    setToggle(false);
    setDrop(false);
  };

  return (
    <motion.nav
      variants = {navVariants}
      initial="hidden"
      whileInView="show"
      className='w-full flex py-6 justify-between items-center navbar border-b-[1px] border-b-[#3f3r45]'>
      <h1 className='JHK z-40'
      onClick={() => reset()}>
        <Link 
        to='/' 
        className='font-opensans font-normal text-white xs:text-[18px] text-[17px] 
        nav-link xs:leading-[10.8px] leading-[10.8px] w-[120px]'
        >
          <ul className='names'>
            <div className='names-all'>
              <li><span>JOO HEE KIM</span></li>
              <li><span className="font-grandiflora">김주희</span></li>
            </div>
          </ul>
        </Link>
      </h1>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <div
        className={`${drop? "dropdown open" : "dropdown"} justify-start mr-10`}
        onClick={() => setDrop((prev) => !prev)}
        >
          <button 
          className={`${drop? "button-effect-active" : "button-effect"} font-opensans font-normal cursor-pointer text-[16px] text-white`}>
          ./projects
          </button>
          <ul className={`${drop? "dropdown-menu open" : "dropdown-menu"} bg-black-gradient w-[150px]`}>
            <li
            key="marble paint"
            className={`font-opensans font-normal cursor-pointer text-[16px] pt-4 pb-3
            text-white link`}
            onClick={() => setDrop((prev) => !prev)}
            >
              <Link 
              to="/marble-paint"
              onClick={() => setDrop(false)}
              >/marble-paint
              </Link>
            </li>
            <li
            key="silent killers"
            className={`font-opensans font-normal cursor-pointer text-[16px] pt-3 pb-3
            text-white link`}
            onClick={() => setDrop((prev) => !prev)}
            >
              <Link 
              to="/silent-killers"
              onClick={() => setDrop(false)}
              >/silent-killers
              </Link>
            </li>
            <li
            key="frankenstein"
            className={`font-opensans font-normal cursor-pointer text-[16px] pt-3 pb-4
            text-white link`}
            onClick={() => setDrop((prev) => !prev)}
            >
              <Link 
              to="/frankenstein"
              onClick={() => setDrop(false)}
              >/frankenstein
              </Link>
            </li>
          </ul>
        </div>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`button-effect font-opensans font-normal cursor-pointer text-
            [16px] ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'} 
            text-white`}
            onClick={() => setDrop(false)}
          >
            <Link to={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center touch-none'>
        <img 
          src={menu}
          alt='menu'
          className={`w-[25px] h-[25px] object-contain ${toggle? "menu-button open z-[999]" : "menu-button z-[999]"}`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'}`}
        >
          <div className='blur w-[100%] h-[100%] fixed top-0 right-0 overflow-y-hidden z-20'/>
          <div
          className={`fixed top-0 right-0 bg-hanji-white bg-cover opacity-[0.1]
          w-[100%] h-[100%] z-20 sidebar touch-none`}
          />
          <ul className='fixed z-40 w-[100%] h-[100%] top-0 right-0 list-none flex flex-col mt-40 h-[400px] justify-start items-start flex-1'>
            <motion.li 
            className={`${drop? "dropdown open" : "dropdown"} w-full justify-start`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
            variants={fadeIn('left', 'spring', 0, 0.65)}
            onClick={() => setDrop((prev) => !prev)}
            >
              <button 
              className={`font-opensans font-normal cursor-pointer text-[24px] pb-3 pl-8 pt-3 text-white`}>
              ./projects
              </button>
              <ul className={`${drop? "dropdown-menu-mobile open" : "dropdown-menu-mobile"} w-[100%] pl-[15vw]`}>
                <li
                key="marble paint"
                className={`font-opensans font-normal cursor-pointer text-[18px] pt-5 pb-3
                text-white link w-full`}
                onClick={() => setDrop((prev) => !prev)}
                >
                  <Link 
                  to="/marble-paint"
                  onClick={() => reset()}
                  >/marble-paint
                  </Link>
                </li>
                <li
                key="silent killers"
                className={`font-opensans font-normal cursor-pointer text-[18px] pt-3 pb-3
                text-white link`}
                onClick={() => setDrop((prev) => !prev)}
                >
                  <Link 
                  to="/silent-killers"
                  onClick={() => reset()}
                  >/silent-killers
                  </Link>
                </li>
                <li
                key="frankenstein"
                className={`font-opensans font-normal cursor-pointer text-[18px] pt-3 pb-5
                text-white`}
                onClick={() => setDrop((prev) => !prev)}
                >
                  <Link 
                  to="/frankenstein"
                  onClick={() => reset()}
                  >/frankenstein
                  </Link>
                </li>
              </ul>
            </motion.li> 
            {navLinks.map((nav, index) => (
            <motion.li
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25}}
              variants={fadeIn('left', 'spring', (index+1)*0.5, 0.65)}
              key={nav.id}
              className={`font-opensans font-normal cursor-pointer text-[24px] pb-3 pt-3 pl-8
              text-white `}
              onClick={() => reset()}
            >
              <Link to={nav.link}>{nav.title}</Link>
            </motion.li>
            ))}
          </ul>
        </div>
      </div>

    </motion.nav>
  )
}

export default Navbar