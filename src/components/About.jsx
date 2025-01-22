import Background from '../assets/about-bg.png'
import { LinearGradient } from 'react-text-gradients'
import { BsDiscord } from "react-icons/bs";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100  }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=' w-full z-10 bg-cover ml-[-2px] bg-no-repeat bg-center text-white font-inter pb-10'
      style={{
        backgroundImage: `url(${Background})`,
     }}
    >
      <div className='flex flex-col justify-start items-start w-[40vw] ml-24'>
        <LinearGradient 
          gradient={['to right', '#979797 ,#754141']}
          className='mt-8 mb-4 text-5xl font-bold'
        >
          lorem ipsum
        </LinearGradient>
        <span className='mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. In rutrum. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nulla non lectus sed nisl molestie malesuada. Quisque porta. Fusce nibh. Mauris tincidunt sem sed arcu. Integer tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        <button 
          className='bg-gradient-to-r from-[#243081] to-[#324DFF] hover:from-[#3A55FF] hover:to-[#8999FF] py-2 px-4 mt-10 rounded-2xl flex justify-around items-center gap-4'
        >
          <BsDiscord color="white" size={35}/>
          <p className='font-bold font-Opensans'>PŘIPOJTE SE K NÁM</p>
        </button>
      </div>
    </motion.div>
  )
}

export default About