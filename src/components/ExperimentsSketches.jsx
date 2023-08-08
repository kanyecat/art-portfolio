import React, { useState } from 'react';
import styles, { layout } from '../style';
import { experiments } from '../constants';
import { Tilt } from 'react-tilt';
import { transition } from "../hoc";
import { imageComponent } from '../components';
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


  window.addEventListener("scroll", changeBackground);

  return (
    <>
    <div className={`bg-cover fixed top-0 right-0 ${changingBg ? "bg-hanji-blue opacity-[0.5] grayscale" : "bg-hanji-blue opacity-[0.2]"} transition-all ease-in-out w-full h-[100vh] z-0`}/>
    {/* <div className={`bg-contain fixed top-0 right-0 ${changingBg ? "bg-hanji-blue opacity-[1] grayscale" : "bg-primary"} transition-all ease-in-out w-full h-[100vh] z-0`}/> */}
    <div id='experiments-sketches' className={`w-[full]`}>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} justify-center z-10`}>
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
                  <img
                    className='pic'
                    src={item.image} 
                    onClick={() => getImage(item.image)}
                  />
                {/* </div> */}
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default transition(ExperimentsSketches,"");