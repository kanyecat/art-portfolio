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
      className={changingBg ? "bg-hanji bg-cover" : "bg-primary" }>
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={model? "model open" : "model"} onClick={() => setModel(false)}>
          <img src={tempImage} />
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
                src={item.image} 
                style={{width: "100%"}}
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