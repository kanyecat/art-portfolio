import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import { defenseMechanism1, defenseMechanism2, cloud, rattle, rattleRef, turtleShip, owlButterfly, tortoise, blueSeaDragon, dragon, blueBumps } from '../assets';
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
                    <li>Sculpting</li>
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
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>A bio-inspired kinetic sculpture that expresses an emotion of fear through multiple defense mechanisms.</span>
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
                    <li>Sculpting</li>
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
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[18px] text-[18px]`}>A bio-inspired kinetic sculpture that expresses an emotion of fear through multiple defense mechanisms.</span>
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
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} border-t-[1px] flex flex-wrap justify-center`}>
          <h1 className='text-white font-grandiflora font-normal text-[30px] w-full pt-6 pb-2'>INSPIRATION & PROCESS</h1>
          <div className='flex flex-col w-[600px] py-10'>
            <h1 className='text-white font-grandiflora text-center text-[20px] py-6'>IDEA INSPIRATION</h1>
            <p className='font-opensans font-thin text-white text-[18px] leading-[27px]'>The Turtle Ship: A warship designed by Admiral Yi Sun-sin and used in the Imjin wars.</p>
            <img src={turtleShip} loading='lazy' className='brightness-[1.2] object-cover mt-6 mb-6'/>
            <p className='font-opensans font-thin text-white text-[18px] leading-[27px]'>The metal spikes, shell, and gas-spewing dragon's head served as a psychological warfare in causing fear among enemies.</p>
            <p className='font-opensans font-thin text-white text-[18px] leading-[27px] pt-4'>The composition of animal defense mechanisms in the design inspired me to make a creature that expresses an emotion that both animals and humans share, fear.</p>
          </div>
          <div className='flex flex-col py-10'>
            <h1 className='text-white font-grandiflora text-center text-[20px]'>BIO-INSPIRATION</h1>
              <div className='flex md:flex-row flex-col md:gap-16'>
                <div className='flex flex-col'>
                <div className='flex flex-col flex-1 items-center pt-10 md:pt-16'>
                  <h1 className='text-white font-opensans text-center text-[14px]'>01. WARNING SOUND: Rattle snake tail</h1>
                  <img src={rattleRef} loading='lazy' className='w-[380px] h-[230px] object-cover mt-6 mb-6'/>
                  <p className='border-l-[1px] pl-4 border-t-[none] h-[13 0px] w-[90px] font-opensans font-thin text-white text-[14px]'>interlocking segments clash together to make threatening noise</p>
                  <img src={rattle} loading='lazy' className='w-[380px] h-[250px] object-cover mt-6 mb-6'/>
                </div>
                <div className='flex flex-col flex-1 items-center pt-8'>
                  <h1 className='h-0 md:h-auto md:visible md:text-white md:font-opensans md:text-center md:text-[14px]'>04. APOSEMATISM: Blue Sea Dragon</h1>
                  <h1 className='text-white font-opensans text-center text-[14px] visible md:hidden'>02. APOSEMATISM</h1>
                  <img src={blueSeaDragon} loading='lazy' className='brightness-[1.2] w-[380px] h-[280px] object-cover mt-6 mb-6'/>
                  <p className='border-l-[1px] pl-4 border-t-[none] h-[13 0px] w-[110px] font-opensans font-thin text-white text-[14px]'>bright colored spines signal its unprofitability to the predators</p>
                  <img src={blueBumps} loading='lazy' className='w-[380px] h-[200px] object-cover mt-6 mb-6'/>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-col flex-1 items-center pt-8 md:pt-16'>
                  <h1 className='h-0 md:h-auto md:visible md:text-white md:font-opensans md:text-center md:text-[14px]'>02. HARD SHELL: Tortoise shell </h1>
                  <h1 className='text-white font-opensans text-center text-[14px] visible md:hidden'>03. HARD SHELL: Tortoise shell </h1>
                  <img src={tortoise} loading='lazy' className='w-[380px] h-[250px] object-cover mt-6 mb-6'/>
                  <p className='border-l-[1px] pl-4 border-t-[none] h-[13 0px] w-[1px] h-[50px] font-opensans font-thin text-white text-[14px]'></p>
                  <ul className='objectives'>
                    <li className='font-opensans font-thin text-white text-[14px] leading-[27px] pt-4'>protects the organs (electronics)</li>
                    <li className='font-opensans font-thin text-white text-[14px] leading-[27px]'>an accessible hiding spot</li>
                  </ul>            
                </div>
                <div className='flex flex-col flex-1 items-center pt-10'>
                  <h1 className='h-0 md:h-auto md:visible md:text-white md:font-opensans md:text-center md:text-[14px]'>03. MIMICRY: Owl Butterfly</h1>
                  <h1 className='text-white font-opensans text-center text-[14px] visible md:hidden'>04. MIMICRY</h1>
                  <img src={owlButterfly} loading='lazy' className='brightness-[1.2] w-[380px] h-[250px] object-cover mt-6 mb-6'/>
                  <p className='border-l-[1px] pl-4 border-t-[none] h-[13 0px] w-[110px] font-opensans font-thin text-white text-[14px]'>diematic patterns has an effect of startling and confusing the predators</p>
                  <img src={cloud} loading='lazy' className='w-[380px] h-[250px] object-cover mt-6 mb-6'/>
                  <img src={dragon} loading='lazy' className='w-[380px] h-[250px] object-cover mt-6 mb-6'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default transition(DefenseMechanism,"");