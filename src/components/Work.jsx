import { features } from '../constants';
import styles, { layout } from '../style';
import { Tilt } from 'react-tilt';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../motion';

const FeatureCard = ({image, title, content, style, size, link, index}) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className="flex"
  >
    <motion.div 
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className= {`flex md:flex-row flex-col md:pb-10 pb-8 ${style} ${index !== features.length -1 ? "mb-4" : "mb-0"}`}
    >
      <Link to={link}>
        <Tilt
          options={{
            max: 10,
            scale: 1,
            speed: 450
          }}
          className={`flex md:flex-row flex-col justify-between items-center cursor-pointer`}>
            <div className={`${styles.flexCenter}`}>
              <img src={image} alt="image" loading="lazy" className={`rounded-[0px] hover:rounded-[15px] hover:transition-all ease duration:350ms ${size} object-cover`}/>
            </div>
        </Tilt>
      </Link>
      <div className='flex-1 flex flex-col ml-0 md:pl-4 pl-0 md:pt-0 pt-3'>
        <h4 className='font-arial font-normal text-white
          md:text-[22px] md:leading-[30.5px] text-[16px] leading-[20px] mb-1'>
          {title}
        </h4>
        <p className='font-arial font-normal text-dimWhite
          md:text-[16px] text-[14px] leading-[18px] mb-1'>
          {content}
        </p>
      </div>
    </motion.div>
  </motion.div>
)

const Work = () => {
  return (
  <section id="features" className={`flex-1 flex ${styles.flexCenter} md:mt-0 mt-10 relative flex flex-col w-full z-10`}>
    {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...
          feature} index={index} />
    ))}
  </section>
  )
}

export default Work