import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon }) => (
  <Tilt className = 'xs:w-[250px] w-full'>
    <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className = 'w-full p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options = {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-cards-100 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain invert' />
        <h3 className='text-white-100 text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a versatile Software Engineer skilled in full-stack development, machine learning, and AR/VR. Proficient in Python,
       JavaScript, Swift, C++, and SQL, I work with frameworks like React, Node.js, Three.js, and Unity, and deploy via AWS S3. Passionate
        about innovation, I build projects integrating AI, web services, and immersive tech. 
      Experienced in SAFe teams, I excel in dynamic environments, problem-solving, and driving impactful solutions.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")