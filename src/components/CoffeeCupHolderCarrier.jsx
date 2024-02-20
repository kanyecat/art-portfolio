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
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>4 x 15.5 x 3.125 Inches</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DESCRIPTION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Our product takes a regular bench top vice used for clamping objects for various mechanical applications and motorizes it. Instead of manually turning the bench vice to tighten an object, we modified the bench top vice so that it attaches to a motor. We would then press a foot pedal to automatically turn the motor and tighten the clamp. We would also have a button that users can press so that the direction the motor turns can be reversed (to allow for tightening and loosening of the clamp).</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TARGET POPULATION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>This product is primarily used for people with hand and wrist tendonitis since they would experience pain and discomfort turning a bench top vice. It would provide the much needed user relief for such individuals in their day to day tasks involving this tool as it removes the need for them to use their hands.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>COMPONENTS</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                <li>Screw Slide Table Linear Actuator</li>
                  <li>Motor Coupling</li>
                  <li>12V 5RPM Gear Motor</li>
                  <li>Foot Control Pedal</li>
                  <li>Circuit</li>
                  <li>Custom Cast Iron Parts</li>
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
                    <div className='flex-[2.5]'>
                        <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                            <li>Lauren Meyers (Mechanical Engineering)</li>
                            <li>Catherine Or (Mechanical Engineering)</li>
                            <li>Mandy Lin (Mechanical Engineering)</li>
                        </ul>
                    </div>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>6 Weeks</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>PRIMARY ROLE</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>CAD Modeler</li>
                    <li>Brainstorming Sketcher</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>SUPPORTING ROLE</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>FEA Simulator</li>
                    <li>Report Writer</li>
                    <li>Presenter</li>
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
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>4 x 15.5 x 3.125 Inches</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>DESCRIPTION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>Our product takes a regular bench top vice used for clamping objects for various mechanical applications and motorizes it. Instead of manually turning the bench vice to tighten an object, we modified the bench top vice so that it attaches to a motor. We would then press a foot pedal to automatically turn the motor and tighten the clamp. We would also have a button that users can press so that the direction the motor turns can be reversed (to allow for tightening and loosening of the clamp).</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TARGET POPULATION</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>This product is primarily used for people with hand and wrist tendonitis since they would experience pain and discomfort turning a bench top vice. It would provide the much needed user relief for such individuals in their day to day tasks involving this tool as it removes the need for them to use their hands.</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>COMPONENTS</span>
                <ul className={`flex-[2.5] items-start text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                  <li>Screw Slide Table Linear Actuator</li>
                  <li>Motor Coupling</li>
                  <li>12V 5RPM Gear Motor</li>
                  <li>Foot Control Pedal</li>
                  <li>Circuit</li>
                  <li>Custom Cast Iron Parts</li>
                </ul>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TEAM</span>
                    <div className='flex-[2.5]'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                        <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                            <li>Lauren Meyers (Mechanical Engineering)</li>
                            <li>Catherine Or (Mechanical Engineering)</li>
                            <li>Mandy Lin (Mechanical Engineering)</li>
                        </ul>
                    </div>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>TIMELINE</span>
                <span className={`flex-[2.5] text-white font-opensans font-thin md:text-[16px] text-[16px]`}>6 Weeks</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>PRIMARY ROLE</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>CAD Modeler</li>
                    <li>Brainstorming Sketcher</li>
                  </ul>
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] text-white font-grandiflora'>SUPPORTING ROLE</span>
                <div className='flex-[2.5]'>
                  <ul className={`text-white font-opensans font-thin md:text-[16px] text-[16px] objectives`}>
                    <li>FEA Simulator</li>
                    <li>Report Writer</li>
                    <li>Presenter</li>
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