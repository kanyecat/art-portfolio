import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { Tilt } from 'react-tilt';
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../motion'

const FeatureCard = ({image, title, content, link, index}) => (
  <motion.div 
  variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
  className='w-full'>
    <Tilt 
      options={{
        max: 10,
        scale: 1,
        speed: 450
      }}
      alt={link}   
      className={`flex md:flex-row flex-col p-3 rounded-[0px] justify-between items-center bg-black-gradient
      ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card cursor-pointer`}>
        <div className={`w-[200px] h-[200px] rounded-[0px] ${styles.flexCenter}
        bg-white`}>
          <img src={image} alt="image" className='w-[100%] h-[100%] 
          object-cover' />
        </div>
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
    </Tilt>
  </motion.div>
)

const Work = () => {
  return (
  <section id="features" className={layout.section}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...
          feature} index={index} />
      ))}
    </motion.div>
  </section>
  )
}

export default Work