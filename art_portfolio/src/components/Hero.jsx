import styles from '../style';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../motion'
import { TypingText } from '../components';
import { PotCanvas, ChairCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingX} ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} 
        flex-col xl:px-0 sm:px-16 px-6`}>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='flex md:flex-row flex-col justify-center items-center py-[6px] px-4
          bg-discount-gradient rounded-[0px] mb-2 w-full'>
            <span className='font-arimo font-normal text-[15px] text-dimWhite'>Joo Hee is a senior studying </span>
            <TypingText title=" Art and Mechanical Engineering " textStyles ='text-white' />
            <span className='font-arimo font-normal text-[15px] text-dimWhite'>at Carnegie Mellon University.</span>
          </motion.div>  
        </div>
      </section>
      <div className={`flex md:flex-row flex-col h-[300px] ${styles.paddingX} mt-10`}>
        <ChairCanvas />
        {/* <PotCanvas /> */}
      </div>

    </>
  )
}

export default Hero