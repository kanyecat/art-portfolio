import styles from '../style';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../motion'
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
        <div className='flex md:flex-row flex-col'>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-40 px-6 md:pt-0 pt-4`}>
            <span className='font-grandiflora xs:text-[90px] text-[50px] xs:leading-[120.8px] leading-[60.8px] text-white'>ART &</span>
            <span className='font-grandiflora xs:text-[90px] text-[50px] xs:leading-[120.8px] leading-[60.8px] text-white'>MECHANICAL ENGINEERING</span>
          </div>
          <div className={`flex md:flex-row flex-col w-[400px] h-[300px] md:pt-0 pt-4 pr-3 xl:mr-0 sm:mr-40 sm:mt-20 mr-0`}>
            <PotCanvas />
          </div>
        </div>
        <div className="sm:px-40 px-6">
          <p className="font-grandiflora xs:text-[30px] text-[20px] xs:leading-[45.8px] leading-[30.8px] 
            text-white text-align-right">+ PHYSICAL COMPUTING</p>
          <p className="font-grandiflora xs:text-[30px] text-[20px] xs:leading-[45.8px] leading-[30.8px] 
            text-white text-align-right">+ UI UX</p>
        <div className='flex justify-center items-center w-full mt-10'>
          <p className='font-arimo font-normal md:text-[15px] text-[14px] text-dimWhite'>...at Carnegie Mellon University</p>
        </div>
        </div>
        {/* <PotCanvas /> */}
      </section>

    </>
  )
}

export default Hero