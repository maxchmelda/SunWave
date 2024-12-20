import { BsDiscord } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion, useInView } from "motion/react";
import { useRef } from "react";


const Findus = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
    <motion.div 
        className='w-full font-inter flex justify-center items-center py-14 bg-gradient-to-r from-[#200734] to-[#580101]'
        ref={ref}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150  }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className="bg-[#141414] py-10 px-20 flex justify-center items-center gap-12 flex-col rounded-2xl">
            <h2 className="font-bold text-white text-2xl">kde nás najdete</h2>
            <div className="flex justify-center items-center gap-10">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
                    className="cursor-pointer font-Opensans font-bold py-1.5 px-10 flex justify-center items-center gap-2 bg-gradient-to-r from-[#243081] hover:from-[#3A55FF] to-[#324DFF] hover:to-[#8999FF] rounded-2xl"
                >
                    <BsDiscord color="white" size={35} />
                    <p className="text-white">DISCORD</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
                    className="cursor-pointer font-Opensans font-bold py-1.5 px-10 flex justify-center items-center gap-2 bg-gradient-to-r from-[#f9ce3483] hover:from-[#f9ce34] via-[#ee2a7c7e] hover:via-[#ee2a7c] to-[#6228d77a] hover:to-[#6228d7] rounded-2xl"
                >
                    <FaInstagramSquare color="white" size={35} />
                    <p className="text-white">INSTAGRAM</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
                    className="cursor-pointer font-Opensans font-bold py-1.5 px-10 flex justify-center items-center gap-2 bg-gradient-to-r from-[#ff000080] hover:from-[#ff0000] to-[#31010180] hover:to-[#310101] rounded-2xl"
                >
                    <FaYoutube color="white" size={35} />
                    <p className="text-white">YOUTUBE</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
                    className="cursor-pointer font-Opensans font-bold py-1.5 px-14 flex justify-center items-center gap-2 bg-gradient-to-r from-[#7daaff83] hover:from-[#7daaff] to-[#003e9c83] hover:to-[#003e9c] rounded-2xl"
                >
                    <IoIosMail color="white" size={35} />
                    <p className="text-white">EMAIL</p>
                </motion.a>
            </div>
        </div>
    </motion.div>
  )
}

export default Findus