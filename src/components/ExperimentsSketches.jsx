import React, { useState } from 'react';
import styles, { layout } from '../style';
import { experiments } from '../constants';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../motion'
import { close } from '../assets';
import "./gallery.css"

const ExperimentsSketches = () => {
  const [model, setModel] = useState(false);
  const [tempImage, setTempImage] = useState('');
  const getImage = (image) => {
    setTempImage(image);
    setModel(true);
  };

  const [changingBg, setBg] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setBg(true);
    } else {
      setBg(false);
    }
    // console.log(window.scrollY)
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <motion.div 
      variants={staggerContainer} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`${changingBg ? "bg-white" : "bg-primary"} transition-all ease duration:350ms`}>
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={model? "model open" : "model"} onClick={() => setModel(false)}>
          <img src={tempImage} loading='lazy'/>
        </div>
        <div className='gallery'>
          {experiments.map((item, index) => (
            <Tilt className='pics' 
            options={{
              max: 15,
              scale: 1,
              speed: 450
            }}
            key={index}>
              <img
                className='pic'
                src={item.image} 
                style={{width: "100%"}}
                loading='lazy'
                onClick={() => getImage(item.image)}
              />
            </Tilt>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ExperimentsSketches