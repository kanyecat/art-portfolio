import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { Tilt } from 'react-tilt';
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../motion'

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
    className= {`flex md:flex-row flex-col pb-10 ${style}`}
    >
      <Tilt 
        options={{
          max: 5,
          scale: 1,
          speed: 450
        }}
        alt={link}   
        className={`flex md:flex-row flex-col justify-between items-center
        ${index !== features.length -1 ? "mb-6" : "mb-0"} cursor-pointer`}>
          <div className={`${styles.flexCenter}`}>
            <img src={image} alt="image" className={`${size} object-cover`}/>
          </div>
      </Tilt>
      <div className='flex-1 flex flex-col ml-3 pt-4'>
        <h4 className='font-arial font-semibold text-white
          text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-arial font-normal text-dimWhite
          text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </motion.div>
  </motion.div>
)

const Work = () => {
  return (
  <section id="features" className={`flex-1 flex ${styles.flexCenter} md:mt-0 mt-10 relative flex flex-col w-full`}>
    {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...
          feature} index={index} />
    ))}
  </section>
  )
}

export default Work