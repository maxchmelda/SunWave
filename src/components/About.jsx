import Background from '../assets/about-bg.png';
import MobileBackground from '../assets/about-bg-mobile.png';
import { LinearGradient } from 'react-text-gradients';
import { BsDiscord } from "react-icons/bs";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full z-10 bg-cover ml-[-2px] bg-no-repeat bg-center text-white font-inter py-28 relative max-[1050px]:py-10 max-[835px]:text-sm max-[650px]:mt-10"
      style={{
        backgroundImage: `url(${MobileBackground})`,
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-start items-start w-[40vw] max-[650px]:w-[80vw] ml-24 max-[650px]:mx-auto my-auto z-10">
        <LinearGradient
          gradient={['to right', '#979797 ,#754141']}
          className="mb-4 text-5xl font-bold max-sm:text-2xl max-sm:mb-0 "
        >
          lorem ipsum
        </LinearGradient>
        <span className="mt-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. In rutrum. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.
        </span>
        <span className="max-[650px]:hidden">
          Nulla non lectus sed nisl molestie malesuada. Quisque porta. Fusce nibh. Mauris tincidunt sem sed arcu. Integer tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>


        <button
          className="bg-gradient-to-r from-[#243081] to-[#324DFF] hover:from-[#3A55FF] hover:to-[#8999FF] py-2 max-sm:py-1 px-4 max-sm:px-2 mt-10 max-sm:mt-3 rounded-2xl flex justify-around items-center gap-4"
        >
          <BsDiscord color="white" size={35} />
          <p className="font-bold font-Opensans">PŘIPOJTE SE K NÁM</p>
        </button>
      </div>
    </motion.div>
  );
};

export default About;
