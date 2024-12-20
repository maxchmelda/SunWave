import {Games, Navbar, About, News, Findus, Footer } from '../components'
import Logo from '../assets/logo.png'
import City from '../assets/city.jpg'
import { motion } from 'motion/react'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-black'>
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
        <Games />
        <About />
        <News />
        <Findus />
        <Footer />
    </div>
  )
}

export default Home