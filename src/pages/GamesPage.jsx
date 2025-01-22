import React from 'react'
import { motion } from 'motion/react'
import { Findus, Footer, Games, Navbar } from '../components'
import City from '../assets/city.jpg'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Fivem_M from '../assets/Fivem_military.png';
import Fivem_RP from '../assets/Fivem_rp.png';
import Rust from '../assets/rust.png';
import Minecraft from '../assets/minecraft.png';

const GamesPage = () => {
  return (
    <div className='w-full min-h-screen bg-black font-inter'>
        <img
          src={City} 
          alt="background" 
          className='absolute h-[800px] w-full opacity-50 top-[-100px] z-0'
        />
        <div className=' absolute z-5 top-[450px] w-full h-[350px] bg-gradient-to-b from-[#0000002a] via-[#000000] to-[#00000000]'>

        </div>
        <div className='flex justify-center items-start gap-20'>
            <motion.img 
              initial={{ x: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
              src={Logo} 
              alt="logo" 
              className='w-[180px] z-10 mt-3' 
            />
            <Navbar />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeIn"}}
        >
          <div className='text-white absolute top-[460px] left-[25vw] flex justify-center items-center gap-6'>
            <Link to="/" className="text-white hover:text-gray-400 underline">home</Link>
            <p>/</p>
            <p>hry</p>
          </div>
          <div className='w-full bg-black flex justify-center items-center text-white mt-[300px]'>
            <div className='w-[40vw] z-10 flex flex-col justify-center gap-10 items-center'>
              <h2 className='text-3xl font-bold'>Lorem ipsum</h2>
              <p className='text-white font-light text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. </p>
            </div>
          </div>
        </motion.div>
        <div className='w-full flex justify-center items-center font-inter gap-4 mt-20 mb-20'>
                <motion.a
                    href="/hry/fivem-rp"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.5, ease: "easeOut" } }}
                    whileHover={{ scale: 1.05, transition: { delay: 0} }}
                    className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center cursor-pointer'
                    style={{
                        background: `url(${Fivem_RP})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                        <p>Aktivní hráči</p>
                        <p>100/669</p>
                    </div>
                </motion.a>
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7, ease: "easeOut" } }}
                    whileHover={{ scale: 1.05, transition: { delay: 0} }}
                    className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center cursor-pointer'
                    style={{
                        background: `url(${Fivem_M})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                        <p>Aktivní hráči</p>
                        <p>100/669</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9, ease: "easeOut" } }}
                    whileHover={{ scale: 1.05, transition: { delay: 0} }}
                    className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center cursor-pointer'
                    style={{
                        background: `url(${Rust})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                        <p>Aktivní hráči</p>
                        <p>100/669</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.1, ease: "easeOut" } }}
                    whileHover={{ scale: 1.05, transition: { delay: 0} }}
                    className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center cursor-pointer'
                    style={{
                        background: `url(${Minecraft})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                        <p>Aktivní hráči</p>
                        <p>100/669</p>
                    </div>
                </motion.div>
            </div>
        <Findus />
        <Footer />
    </div>
  )
}

export default GamesPage