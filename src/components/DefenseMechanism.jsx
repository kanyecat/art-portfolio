import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import { defenseMechanism1, defenseMechanism2, rattle } from '../assets';
import "./gallery.css"

const DefenseMechanism = () => {
  return (
    <div id='defense-mechanism' className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center`}>
          <div className='hidden h-[0] md:h-[auto] md:flex md:flex-1 md:visible md:flex-col'>
            <span className='md:text-start w-full md:text-[60px] text-[35px] text-white font-grandiflora px-6 md:mb-4 mb-3'>DEFENSE</span>
            <span className='md:text-start w-full md:text-[60px] text-[35px] text-white font-grandiflora px-6 md:mb-4 mb-3'>MECHANISM</span>
          </div>
          <div className='visible mb-8 md:h-[0] h-[auto] md:hidden'>
            <span className='text-center md:text-[60px] text-[30px] text-white font-grandiflora md:mb-4 mb-6'>DEFENSE MECHANISM</span>
          </div>
          <div className='flex md:flex-row flex-col'>
          <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>2023</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>4 Weeks</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[0.15]'></div>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[18px] text-[18px] objectives`}>
                    <li>3D Printing</li>
                    <li>Laser Cutting</li>
                    <li>Sculpting and Sanding</li>
                    <li>Programming</li>
                    <li>Building and Testing</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18x]`}>16 x 24 x 7 Inches</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>STATEMENT</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <div className='flex-[0.15]'></div>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[18px] text-[18px] objectives`}>
                  <li>Plaster</li>
                  <li>Vibration Motor</li>
                  <li>Ultrasonic Sensor</li>
                  <li>Plywood</li>
                  <li>PLA</li>
                  <li>Acrylic Paint</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:flex-[1.35] scroll-box md:h-[700px]'>
              <img src={defenseMechanism1} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              <img src={defenseMechanism2} loading='lazy' className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={rattle} loading='lazy' className='w-auto h-[auto] object-cover mt-6 mb-6'/>
            </div>

            <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4'>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>2023</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[18px]`}>4 Weeks</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[0.15]'></div>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[18px] text-[18px] objectives`}>
                    <li>3D Printing</li>
                    <li>Laser Cutting</li>
                    <li>Sculpting and Sanding</li>
                    <li>Programming</li>
                    <li>Building and Testing</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18x]`}>16 x 24 x 7 Inches</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>STATEMENT</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <div className='flex-[0.15]'></div>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[18px] text-[18px] objectives`}>
                    <li>Plaster</li>
                    <li>Vibration Motor</li>
                    <li>Ultrasonic Sensor</li>
                    <li>Plywood</li>
                    <li>PLA</li>
                    <li>Acrylic Paint</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default transition(DefenseMechanism,"");