import React, { useState } from 'react';
import styles from '../style';
import { transition } from "../hoc";
import { teabagboxfinal1, teabagboxfinal2, teabagboxfinal3, teabagboxfinal4, teabagboxfinal5, teabagboxflyer } from '../assets';
import "./gallery.css";

const TeaBagBox = () => {
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
            <span className='md:text-start w-full md:text-[50px] text-[35px] text-white font-grandiflora px-6 md:mb-4 mb-3'>TEA BAG BOX</span>
          </div>
          <div className='visible mb-8 md:h-[0] h-[auto] md:hidden'>
            <span className='text-center md:text-[50px] text-[35px] text-white font-grandiflora md:mb-4 mb-6'>TEA BAG BOX</span>
          </div>
          <div className='flex md:flex-row flex-col'>
          <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
            <img src={teabagboxfinal5} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(teabagboxfinal1)}/>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>2024</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                  <div className='flex-[2.5]'>
                    <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                      <li>2.8125 x 2.8125 x 2.875 Inches (closed)</li>
                      <li>5.875 x 5.875 x 4.875 Inches (opened)</li>
                    </ul>
                  </div>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DESCRIPTION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Tea Bag Box is an origami-inspired container that transforms into a tea bag display stand. It is perfect for storing, organizing, and separating tea bags by flavor.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TARGET POPULATION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>This product is primarily used for people with hand and wrist tendonitis since they would experience pain and discomfort turning a bench top vice. It would provide the much needed user relief for such individuals in their day to day tasks involving this tool as it removes the need for them to use their hands.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUM</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                  <li>Basswood tone taskboard</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:flex-[1.35] scroll-box md:h-[700px]'>
                <img src={teabagboxfinal1} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(teabagboxfinal1)}/>
                <img src={teabagboxfinal2} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(teabagboxfinal2)}/>
                <img src={teabagboxfinal3} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(teabagboxfinal3)}/>
                <img src={teabagboxfinal4} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(teabagboxfinal4)}/>
                <img src={teabagboxfinal5} loading='lazy' className='hidden md:visible md:flex w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(teabagboxfinal5)}/>
                <img src={teabagboxflyer} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6' onClick={() => getImage(teabagboxflyer)}/>
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
                    <li>Precise paper folding</li>
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
                  <div className='flex-[2.5]'>
                    <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                      <li>2.8125 x 2.8125 x 2.875 Inches (closed)</li>
                      <li>5.875 x 5.875 x 4.875 Inches (opened)</li>
                    </ul>
                  </div>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DESCRIPTION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Tea Bag Box is an origami-inspired container that transforms into a tea bag display stand. It is perfect for storing, organizing, and separating tea bags by flavor.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TARGET POPULATION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>This product is primarily used for people with hand and wrist tendonitis since they would experience pain and discomfort turning a bench top vice. It would provide the much needed user relief for such individuals in their day to day tasks involving this tool as it removes the need for them to use their hands.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUM</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                  <li>Basswood tone taskboard</li>
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
                    <li>Precise paper folding</li>
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

export default transition(TeaBagBox,"");