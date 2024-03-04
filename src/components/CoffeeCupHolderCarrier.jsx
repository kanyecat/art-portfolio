import React, { useState } from 'react';
import styles from '../style';
import { transition } from "../hoc";
import { coffeecupholdercarrierfinal1, coffeecupholdercarrierfinal2, coffeecupholdercarrierfinal3, coffeecupholdercarrierfinal4, 
  coffeecupholdercarrierfinal5, 
  coffeecupholdercarrierflyer} from '../assets';
import "./gallery.css";

const CoffeeCupHolderCarrier = () => {
    const [model, setModel] = useState(false);
    const [tempImage, setTempImage] = useState('');
    const getImage = (image) => {
    setTempImage(image);
    setModel(true);
    };
  return (
    <div id='vice' className='bg-primary w-full overflow-hidden'>
        <div className={model? "model open z-[13]" : "model z-[13]"} onClick={() => setModel(false)}>
        <img src={tempImage} className="z-[13]" loading='lazy'/>
        <div className='direction text-dimWhite font-opensans font-thin text-[14px]'>click anywhere to close</div>
        </div>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center`}>
          <div className='hidden h-[0] md:h-[auto] md:flex md:flex-1 md:visible md:flex-col'>
            <span className='md:text-start w-full md:text-[50px] text-[35px] text-white font-grandiflora px-6 md:mb-4 mb-3'>COFFEE CUP HOLDER/CARRIER</span>
          </div>
          <div className='visible mb-8 md:h-[0] h-[auto] md:hidden'>
            <span className='text-center md:text-[50px] text-[35px] text-white font-grandiflora md:mb-4 mb-6'>COFFEE CUP HOLDER/CARRIER</span>
          </div>
          <div className='flex md:flex-row flex-col'>
          <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
          <img src={coffeecupholdercarrierfinal1} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(coffeecupholdercarrierfinal1)}/>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>2024</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>4 x 5.5 x 3.125 Inches</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DESCRIPTION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>A lightweight, reusable cup holder for hot drinks that can be held from the side or top.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                  <li>Acrylic</li>
                  <li>Epoxy</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:flex-[1.35] scroll-box md:h-[700px]'>
                <img src={coffeecupholdercarrierfinal1} loading='lazy' className='hidden md:visible md:flex w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(coffeecupholdercarrierfinal1)}/>
                <img src={coffeecupholdercarrierfinal2} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(coffeecupholdercarrierfinal2)}/>
                <img src={coffeecupholdercarrierfinal3} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(coffeecupholdercarrierfinal3)}/>
                <img src={coffeecupholdercarrierfinal4} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(coffeecupholdercarrierfinal4)}/>
                <img src={coffeecupholdercarrierfinal5} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(coffeecupholdercarrierfinal5)}/>
                <img src={coffeecupholdercarrierflyer} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(coffeecupholdercarrierflyer)}/>
            </div>

            <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
            <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>2 Weeks</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>CAD</li>
                    <li>Laser Cutting</li>
                    <li>Plastic Bending with Heat Gun</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4'>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>2024</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>4 x 5.5 x 3.125 Inches</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DESCRIPTION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>A lightweight, reusable cup holder for hot drinks that can be held from the side or top.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                  <li>Acrylic</li>
                  <li>Epoxy</li>
                </ul>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>2 Weeks</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>CAD</li>
                    <li>Laser Cutting</li>
                    <li>Plastic Bending with Heat Gun</li>
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

export default transition(CoffeeCupHolderCarrier,"");