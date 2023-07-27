import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          {/* <img src={logo} alt="joohee" className="w-[106px] h-[72px] object-contain"/> */}
          {/* <p className={`${styles.paragraph} mt-4 max-w-[310px]`}></p> */}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6
      border-t-[1px] border-t-[#3f3r45]">
        <p className="font-arimo font-normal text-center text-[16px] leading-[27px] text-white">
        © Code by Joo Hee Kim
        </p>
        <p className="font-arimo font-normal text-center text-[16px] leading-[27px] text-white">
          jooheeki@andrew.cmu.edu
        </p>
        
        
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
          <a href={social.link}>
            <img 
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer
              ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          </a>
          ))}
        </div>
      
      </div>
    </section>
  )
}

export default Footer