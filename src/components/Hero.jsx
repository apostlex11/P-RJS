import { motion } from 'framer-motion';
import { styles } from '../styles';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#3ef0f6]'/>
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Terry &nbsp;
            <span className='text-[#3ef0f6]'>
            Sa
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer 
            </p>
            <p className={`${styles.sectionSubText} text-white`}>
            Full-Stack Engineer
          </p>
            <ul className={`${styles.smallSubText} text-grey`}>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>noSQL</li>
              <li>SQL</li>
            </ul>
        </div>
        <div className='avatar-image'>
          <img src="./src/assets/workavatar.png"></img>
        </div>
      </div>


      {/* scroll icon */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  )
}

export default Hero