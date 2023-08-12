import styles from '../style';
import { basecamp1, basecamp2,  me, me2 } from "../assets";
import { Tech } from '../components';
import { transition } from "../hoc";
import { Link } from "react-router-dom";
import "./gallery.css";
import '../index.css';

const About = () => {
  return (
    <>
    <div id='about' className="bg-orangered-gradient w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='bg-cover fixed top-0 right-0 bg-hanji-blue opacity-[0.2] w-full h-[100vh] z-0'/>
          <div className={`flex md:flex-row flex-col md:flex-wrap justify-center`}>
            <div className='flex flex-1 flex-col pb-10 scroll-box md:h-[700px] z-10'>
              <div className='flex flex-row md:pb-8 pb-6 about-section '>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>ABOUT</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>I am currently in the </span>
                  <Link to="https://www.cmu.edu/interdisciplinary/programs/besa.html" className='hover:border-b-[1px] text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'>Bachelor of Engineering Studies and Arts (BESA)</Link>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'> intercollege degree program at Carnegie Mellon University. I am pursuing
                  two majors in the</span>
                  <Link to="https://art.cmu.edu/" className='hover:border-b-[1px] text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'> School of Art</Link>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'> and </span>
                  <Link to="https://www.meche.engineering.cmu.edu/" className='hover:border-b-[1px] text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'>Department of Mechanical Engineering</Link>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'> as well as a minor in </span>
                  <Link to="https://ideate.cmu.edu/undergraduate-programs/physical-computing/index.html" className='hover:border-b-[1px] text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'>Physical Computing</Link>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>.</span>
                </div>
              </div>
              <div className='visible md:hidden flex-[0.7] flex flex-row justify-center items-center z-10'>
                <img src={me} className='w-full' loading='lazy'/>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>01</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Carnegie Mellon University First-Year Art Award: Wilfred Radio</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>02</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Scholastic Art & Writing Awards: National Gold Medal</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>03</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Scholastic Art & Writing Awards: New York Life Foundation Selected Work</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'></span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>The art of kinetics always captivates my interest as I find the sensory experience that comes from the movement of artwork particularly gratifying.
                  I am always exploring kinetic art that triggers sensory, emotional, and intellectual responses through its mechanical components.</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>04</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Front-end developer & UX UI designer subcontractor at Hyix LLC - San Diego, CA (Present)</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>05</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Engineering Instructor at Robolink - San Diego, CA</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <img src={basecamp1} className='md:saturate-0 hover:saturate-100 transition ease-in-out duration-300 w-[50%] h-[auto] pr-[2px]' loading='lazy'/>
                <img src={basecamp2} className='md:saturate-0 hover:saturate-100 transition ease-in-out duration-300 w-[50%] h-[auto] pl-[2px]' loading='lazy'/>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'></span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>While working as an engineering instructor at a summer basecamp hosted by </span>
                  <Link to="https://www.robolink.com/" className='border-b-[1px] hover:border-b-[#38A0F4] text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>Robolink</Link>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'> and </span>
                  <Link to="https://www.jointheleague.org/" className='border-b-[1px] hover:border-b-[#C1511B] text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>The League of Amazing Programmers</Link>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>, I fortunately built
                  a connection with another instructor working as a software engineer. After stepping into the world of web development, I learned how to empathize with the clients and provide them with solutions. Since then, my design
                  thinking skills have been improving in my main disciplines: art and mechanical enginneering.</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>06</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Engineering intern at Robolink</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>07</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Engineering intern at Robo3D</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'></span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>When the desktop 3D printer market was rapidly rising, I learned how to bring my idea from a sketch, to a 3D computer-aided-design, to a 3D print.
                  After I became comfortable with rapid prototyping, I worked as an intern at Robolink. I learned how to design products that allow kids to easily build robots with joy. Then, I was introduced to </span>
                  <Link to="https://robo3d.com/" className='border-b-[1px] hover:border-b-[#67B2E8] text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>Robo3D</Link>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>, where I studied 3D printers in depth by physically building
                  one of their printers and printing with various materials.</span>
                </div>
              </div>
            </div>
            <div className='flex-[0.05] h-[700px] w-[auto]'></div>
            <div className='hidden md:visible md:flex-[0.7] md:flex md:flex-row flex-col justify-center items-start z-10'>
              <img src={me} className='w-full' loading='lazy'/>
            </div>
          </div>
          <div className={`flex flex-col md:flex-wrap justify-center items-center md:py-16`}>
            <div className='md:w-[400px] bg-hanji-black items-center justify-center z-10'>
              <img src={me2} className='py-10 mx-[auto] px-10' loading='lazy'/>
              <div className='md:px-16 px-10 pb-10'>
                <span className='text-white font-opensans font-thin md:text-[16px] text-[16px] leading-[30px]'>Aside from school and work, I am always making things after exploring nature, calligraphy, and films.</span>
              </div>
            </div>
          </div>
          <Tech />
        </div>
      </div>
    </div>
    </>
  )
}

export default transition(About);