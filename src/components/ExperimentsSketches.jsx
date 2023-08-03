import React, { useState } from 'react';
import styles, { layout } from '../style';
import { experiments } from '../constants';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../motion'
import { close } from '../assets';
import { transition } from "../hoc";
import "./gallery.css";

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

  // const blurredImageDiv = document.querySelector("#blur-img");
  // const img = blurredImageDiv.querySelector("img");
  // function loaded() {
  //   blurredImageDiv.classList.add("loaded")
  // };
  
  // if (img.complete) {
  //   loaded()
  // } else {
  //   img.addEventListener("load", loaded)
  // };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={`${changingBg ? "bg-white" : "bg-primary"} w-[full] transition-all ease duration:350ms`}>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} justify-center`}>
          <div className={model? "model open" : "model"} onClick={() => setModel(false)}>
            <img src={tempImage} loading='lazy'/>
          </div>
          <div className='gallery'>
            {experiments.map((item, index) => (
              <Tilt className='pics'
              loading="lazy"
              options={{
                max: 15,
                scale: 1,
                speed: 450
              }}
              key={index}>
                {/* <div id='blur-img'
                style={`background-image: url(${item.imageSmall})`}> */}
                  <img
                    className='pic'
                    src={item.image} 
                    style={{width: "100%"}}
                    loading='lazy'
                    onClick={() => getImage(item.image)}
                  />
                {/* </div> */}
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default transition(ExperimentsSketches,"");