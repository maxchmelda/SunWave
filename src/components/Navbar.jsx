import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { motion } from 'motion/react';


const Navbar = () => {
    const selected = useLocation().pathname;
    
  return (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className='inline-flex justify-center z-10 font-inter items-center gap-20 py-3 px-6 border-b border-b-custom-border mt-10'
        >
            <Link className={`hover:underline text-white ${selected === "/" ? "text-white underline" : "text-white/60"}`} to="/">home</Link>
            <Link className={`hover:underline text-white ${selected === "/hry" ? "text-white underline" : "text-white/60"}`} to="/hry">hry</Link>
            <Link className={`hover:underline text-white ${selected === "/pravidla" ? "text-white underline" : "text-white/60"}`} to="/pravidla">komunitní pravidla</Link>
            <Link className={`hover:underline text-white ${selected === "/novinky" ? "text-white underline" : "text-white/60"}`} to="/novinky">novinky</Link>
            <Link className={`hover:underline text-white ${selected === "/kontakt" ? "text-white underline" : "text-white/60"}`} to="/kontakt">kontakt</Link>
        </motion.nav>
  )
}

export default Navbar