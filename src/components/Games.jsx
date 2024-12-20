import Fivem_M from '../assets/Fivem_military.png';
import Fivem_RP from '../assets/Fivem_rp.png';
import Rust from '../assets/rust.png';
import Minecraft from '../assets/minecraft.png';
import { easeOut, motion } from 'motion/react'

const Games = () => {
  return (
    <div className='w-full mt-[280px] flex justify-center items-center font-inter gap-4'>
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeOut" } }}
            whileHover={{ scale: 1.05 }}
            className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center mb-10 cursor-pointer'
            style={{
                background: `url(${Fivem_RP})`,
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
            animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7, ease: "easeOut" } }}
            whileHover={{ scale: 1.05 }}
            className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center mb-20 cursor-pointer'
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
            whileHover={{ scale: 1.05 }}
            className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center mb-10 cursor-pointer'
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
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.1, ease: "easeOut" } }}
            whileHover={{ scale: 1.05 }}
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
  )
}

export default Games;