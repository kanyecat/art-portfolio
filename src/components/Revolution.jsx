import React, { useState } from 'react';
import styles from '../style';
import { transition } from "../hoc";
import { revolution1, revolution2, revolution3, revolution4 } from '../assets';
import revolution from "../assets/revolution.mp4";
import "./gallery.css"

const Revolution = () => {
    const [model, setModel] = useState(false);
    const [tempImage, setTempImage] = useState('');
    const getImage = (image) => {
    setTempImage(image);
    setModel(true);
    };
  return (
    <div id='revolution' className='bg-primary w-full overflow-hidden'>
        <div className={model? "model open z-[13]" : "model z-[13]"} onClick={() => setModel(false)}>
        <img src={tempImage} className="z-[13]" loading='lazy'/>
        <div className='direction text-dimWhite font-opensans font-thin text-[14px]'>click anywhere to close</div>
        </div>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center`}>
          <div className='hidden h-[0] md:h-[auto] md:flex md:flex-1 md:visible md:flex-col'>
            <span className='md:text-start w-full md:text-[50px] text-[35px] text-white font-grandiflora px-6 md:mb-4 mb-3'>(R)EVOLUTION</span>
          </div>
          <div className='visible mb-8 md:h-[0] h-[auto] md:hidden'>
            <span className='text-center md:text-[50px] text-[35px] text-white font-grandiflora md:mb-4 mb-6'>(R)EVOLUTION</span>
          </div>
          <div className='flex md:flex-row flex-col'>
          <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>2023</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>7.5 x 6.5 x 10 Inches</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>STATEMENT</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                  <li>Wood</li>
                  <li>Clear Acrylic</li>
                  <li>DC Motor</li>
                  <li>Acrylic Paint</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:flex-[1.35] scroll-box md:h-[700px]'>
              <img src={revolution1} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(revolution1)}/>
              <img src={revolution2} loading='lazy' className='w-auto h-[auto] object-cover mt-6 mb-6' onClick={() => getImage(revolution2)}/>
              <img src={revolution3} loading='lazy' className='w-auto h-[auto] object-cover mt-6 mb-6' onClick={() => getImage(revolution3)}/>
              <img src={revolution4} loading='lazy' className='w-auto h-[auto] object-cover mt-6 mb-6' onClick={() => getImage(revolution4)}/>
              <video className="pic mt-6 mb-6" controls loop>
                        <source src={revolution} type='video/mp4'/>
                </video>
            </div>

            <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
            <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>4 Weeks</span>
              </div>
              <div className='flex flex-row gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>Laser Cutting</li>
                    <li>Wood Working</li>
                    <li>Painting</li>
                    <li>Programming</li>
                    <li>Building and Testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4'>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>2023</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>7.5 x 6.5 x 10 Inches</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>STATEMENT</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                  <li>Wood</li>
                  <li>Clear Acrylic</li>
                  <li>DC Motor</li>
                  <li>Acrylic Paint</li>
                </ul>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>4 Weeks</span>
              </div>
              <div className='flex flex-row gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>Laser Cutting</li>
                    <li>Wood Working</li>
                    <li>Painting</li>
                    <li>Programming</li>
                    <li>Building and Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default transition(Revolution,"");