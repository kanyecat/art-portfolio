import styles from '../style';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../motion'
import { TypingText } from '../components';
import { me } from "../assets";
import { Tech } from '../components';

const About = () => {
  return (
    <>
    <div className={`bg-primary ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
      <section id='home' className={`flex md:flex-row flex-col`}>
        <img src={me} className='w-[400px]'/>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className='flex md:flex-row flex-col justify-center items-center py-[6px] px-4
        bg-discount-gradient rounded-[0px] mb-2 w-full'>
          <TypingText title="coming soon" textStyles ='text-white' />
          <span className='font-arimo font-normal text-[15px] text-dimWhite'></span>
        </motion.div>  
      </section>
    </div>
    <div className={`${styles.boxWidth}`}>
      <Tech />
    </div>
    </>
  )
}

export default About