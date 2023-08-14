import React, { useState } from 'react';
import styles from '../style';
import { transition } from "../hoc";
import "./gallery.css";
import { Experimentgallery, Prototypegallery, Floatgallery } from '../components';

const ExperimentsSketches = () => {
  const [model, setModel] = useState(false);
  const [tempImage, setTempImage] = useState('');
  const getImage = (image) => {
    setTempImage(image);
    setModel(true);
  };

  // const [changingBg, setBg] = useState(false);
  // const changeBackground = () => {
  //   if (window.scrollY >= 60) {
  //     setBg(true);
  //   } else {
  //     setBg(false);
  //   }
  //   // console.log(window.scrollY)
  // };


  // window.addEventListener("scroll", changeBackground);

  return (
    <>
    {/* <div className={`bg-cover fixed top-0 right-0 ${changingBg ? "bg-hanji-blue opacity-[0.5] grayscale" : "bg-hanji-blue opacity-[0.2]"} transition-all ease-in-out w-full h-[100vh] z-0`}/> */}
    <div className={`bg-cover fixed top-0 right-0 bg-hanji-blue opacity-[0.5] grayscale transition-all ease-in-out w-full h-[100vh] z-0`}/>
      <div className='flex flex-col w-full'>
        <div className={`hidden md:visible ${styles.paddingY} ${styles.paddingX} md:${styles.flexStart}`}>
            <Floatgallery />
        </div>
      <div className={`visible ${styles.paddingY} md:hidden z-[11] `}>
        <h1 className='w-full text-center text-normal font-opensans text-white text-[16px]'>Digital Prototypes</h1>
        <p className='w-full text-center text-normal font-opensans text-dimWhite text-[14px]'>3D Rendering</p>
        <Prototypegallery />
        <h1 className='pt-10 w-full text-center text-normal font-opensans text-white text-[16px]'>Experiments</h1>
        <p className='w-full text-center text-normal font-opensans text-dimWhite text-[14px]'>Sketch, Painting, Design</p>
        <Experimentgallery />
      </div>
    </div>
  </>
  )
}

export default transition(ExperimentsSketches,"");