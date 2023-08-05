import styles from '../style';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../motion'
import { TypingText } from '../components';
import { PotCanvas, ChairCanvas, ArkCanvas } from "./canvas";
import "./gallery.css";

const Hero = () => {
  return (
    <>
      <section id='home' className={`${styles.paddingY}`}>
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='flex md:flex-row flex-col justify-center items-center mb-2 w-full'>
            <TypingText title="Joo Hee is a senior studying..." textStyles ='text-dimWhite' />
        </motion.div>  
        <div className={`flex md:flex-row flex-col`}>
          <div className={`flex-1 ${styles.flexStart} flex-col ${styles.paddingX} md:pt-0 pt-4`}>
            <span className='font-grandiflora xs:text-[90px] text-[48px] xs:leading-[120.8px] leading-[60.8px] text-white'>ART &</span>
            <span className='font-grandiflora xs:text-[90px] text-[48px] xs:leading-[120.8px] leading-[60.8px] text-white'>MECHANICAL</span>
            <span className='font-grandiflora xs:text-[90px] text-[48px] xs:leading-[120.8px] leading-[60.8px] text-white'>ENGINEERING</span>
          </div>
          <div className={`flex md:flex-row flex-col w-[400px] h-[300px] md:pt-0 pt-4 md:pr-3 xs:mr-40 sm:ml-40 md:mr-40 sm:mt-20 mr-0`}>
            <PotCanvas />
          </div>
        </div>
        <div className={`flex-row ${styles.paddingX} justify-end items-center`}>
          <div className='scramble-txts xs:text-[30px] text-[20px] xs:leading-[45.8px] leading-[30.8px]'>
              <span className='font-grandiflora'>+ PHYSICAL COMPUTING</span>
              <span className="font-grandiflora">+ %&$~:#+^_%?=@/*?-#</span>
              <span className="font-grandiflora">+ P&Y~:#+^_%?=@/*&-#</span>
              <span className="font-grandiflora">+ PH$~I#+^&%?=@/*?-%</span>
              <span className="font-grandiflora">+ PHY~:C+^=%?=@/*&-#</span>
              <span className="font-grandiflora">+ PHY~IC+^_C?=@/*&-&</span>
              <span className="font-grandiflora">+ PHYS:C+^!C?=P/*?-#</span>
              <span className="font-grandiflora">+ PHY~I#+^?CO=P/*&-%</span>
              <span className="font-grandiflora">+ PHYS:C+^=COMP/*#-&</span>
              <span className="font-grandiflora">+ PHYSIC+L!COMP/T&-#</span>
              <span className="font-grandiflora">+ PHYSICAL&COMP/TI-%</span>
              <span className="font-grandiflora">+ PHYSICAL_COMPUTI-?</span>
              <span className="font-grandiflora">+ PHYSICAL=COMPUTI-G</span>
              <span className="font-grandiflora">+ PHYSICAL COMPUTING</span>
          </div>
          <div className='scramble-txts md:pl-40 md:mt-4 mt-2 pl-10 xs:text-[30px] text-[20px] xs:leading-[45.8px] leading-[30.8px]'>
              <span className='font-grandiflora'>+ FRONT-END DEV</span>
              <span className="font-grandiflora">+ %?0#4-3&+*@~^</span>
              <span className="font-grandiflora">+ #R0&4~?@+-D=$</span>
              <span className="font-grandiflora">+ FR0@!=8&+=#E^</span>
              <span className="font-grandiflora">+ FRO#4-EN+*$3#</span>
              <span className="font-grandiflora">+ F?0N!=3N+~D~*</span>
              <span className="font-grandiflora">+ FR0N4~E$+*@*^</span>
              <span className="font-grandiflora">+ F?0NT-EN+~DE$</span>
              <span className="font-grandiflora">+ FRO#T~E@D=$*^</span>
              <span className="font-grandiflora">+ FR0NT-#ND-&3V</span>
              <span className="font-grandiflora">+ FR0#T-EN+=D^V</span>
              <span className="font-grandiflora">+ FR0NT~E&D-D-*</span>
              <span className="font-grandiflora">+ FRONT-END-DE^</span>
              <span className="font-grandiflora">+ FRONT-END DEV</span>
          </div>
        </div>
        <div className='flex justify-center items-center w-full mt-10'>
          <p className='font-arimo font-normal md:text-[15px] text-[14px] text-dimWhite'>...at Carnegie Mellon University</p>
        </div>
        {/* <PotCanvas /> */}
      </section>

    </>
  )
}

export default Hero