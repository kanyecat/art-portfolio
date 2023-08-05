import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import { silentKillers, silentKillers2, silentKillers3, silentKillers4, silentKillers5, silentKillers6 } from '../assets';
import "./gallery.css"

const SilentKillers = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center`}>
        <span className='md:text-start text-center w-full md:text-[70px] text-[35px] text-white font-grandiflora px-6 md:mb-4 mb-8'>SILENT KILLERS</span>
          <div className='flex md:flex-row flex-col'>
          <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>2023</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>2 Weeks</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[0.15]'></div>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                    <li>Digital Fabrication: Laser Cutting</li>
                    <li>Wood Working</li>
                    <li>Molding and Casting</li>
                    <li>Painting</li>
                    <li>Building</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18x]`}>48 x 48 x 48 Inches</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>STATEMENT</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <div className='flex-[0.15]'></div>
                <ul className={`flex-[2.5] items-start text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                  <li>Plywood</li>
                  <li>Plaster</li>
                  <li>Resin</li>
                  <li>Fishing Line</li>
                  <li>Acrylic Paint</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:flex-[1.5] scroll-box md:h-[700px]'>
              <img src={silentKillers} className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              <img src={silentKillers2} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={silentKillers3} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={silentKillers4} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={silentKillers5} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={silentKillers6} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
            </div>

            <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-0'>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>2023</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>2 Weeks</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TECHNIQUES</span>
                <div className='flex-[0.15]'></div>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                    <li>Laser Cutting</li>
                    <li>Wood Working</li>
                    <li>Molding and Casting</li>
                    <li>Painting</li>
                    <li>Building</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DIMENSIONS</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18x]`}>48 x 48 x 48 Inches</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>Individual Project</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>STATEMENT</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>MEDIUMS</span>
                <div className='flex-[0.15]'></div>
                <ul className={`flex-[2.5] items-start text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                  <li>Plywood</li>
                  <li>Plaster</li>
                  <li>Resin</li>
                  <li>Fishing Line</li>
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

export default transition(SilentKillers,"");