import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Libraries/Frameworks</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial={{ opacity: 1 }}
        className={styles.smallSubText}
      >
      </motion.p>
      <ul className="horizontal-list" >
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>MongoDB</li>
        <li>Docker</li>
        <li>Figma</li>
        <li>Git</li>
        <li>Tailwind</li>
        <li>Redux</li>
        <li>ThreeJS</li>
        <li>MERN</li>
        <li>BootStrap</li>
        <li>GraphQL</li>
        <li>NoSQL & SQL</li>
      </ul>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
      </>

  )
}

export default SectionWrapper(Tech, '')