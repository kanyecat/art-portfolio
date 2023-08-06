import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import { marblepaint, marblepaint1, marblepaint2, marblepaint3, marblepaint4, marblepaint5, me1 } from '../assets';
import "./gallery.css"

const MarblePaint = () => {
  return (
    <div id='marble-paint' className='bg-primary w-full overflow-hidden'>
      <div className={` ${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center`}>
          <span className='md:flex md:flex-1 md:text-start text-center w-full md:text-[70px] text-[35px] text-white font-grandiflora px-6 md:mb-4 mb-8'>MARBLE PAINT</span>
          <div className='flex md:flex-row flex-col'>
            <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>2022</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>8 Weeks</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>ROLE</span>
                <div className='flex-[0.15]'></div>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                    <li>Mechanical Design</li>
                    <li>Digital Prototyping</li>
                    <li>Laser Cutting</li>
                    <li>3D Printing</li>
                    <li>Building and Testing</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>FOR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18x]`}>The Children's School at Carnegie Mellon University</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>A senior in Department of Electrical and Computing Engineering</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>ABSTRACT</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>OBJECTIVES</span>
                <div className='flex-[0.15]'></div>
                <ul className={`flex-[2.5] items-start text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                  <li>Create an interactive painting machine</li>
                  <li>Allow the children to  have artistic freedom</li>
                  <li>Make the project easy to interact with</li>
                  <li>Able to produce variety of paintings (paintings are not structured)</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:flex-[1.5] scroll-box md:h-[700px]'>
              <img src={marblepaint} className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              <img src={marblepaint2} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={marblepaint1} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={marblepaint3} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={marblepaint4} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={marblepaint5} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={me1} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
            </div>

            <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4'>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>YEAR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>2022</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>8 Weeks</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>ROLE</span>
                <div className='flex-[0.15]'></div>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                    <li>Mechanical Design</li>
                    <li>Digital Prototyping</li>
                    <li>Laser Cutting</li>
                    <li>3D Printing</li>
                    <li>Building and Testing</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>FOR</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18x]`}>The Children's School at Carnegie Mellon University</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>A senior in Department of Electrical and Computing Engineering</span>
              </div>
              <div className='flex flex-row pb-6'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>ABSTRACT</span>
                <div className='flex-[0.15]'></div>
                <span className={`flex-[2.5] text-white font-animo font-normal md:text-[18px] text-[18px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>OBJECTIVES</span>
                <div className='flex-[0.15]'></div>
                <ul className={`flex-[2.5] items-start text-white font-animo font-normal md:text-[18px] text-[18px] objectives`}>
                  <li>Create an interactive painting machine</li>
                  <li>Allow the children to  have artistic freedom</li>
                  <li>Make the project easy to interact with</li>
                  <li>Able to produce variety of paintings (paintings are not structured)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default transition(MarblePaint,"")