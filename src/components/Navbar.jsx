import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const selected = useLocation().pathname;
    
  return (
        <nav className='inline-flex justify-center z-10 font-inter items-center gap-20 py-3 px-6 border-b border-b-custom-border mt-10'>
            <Link className={`text-white ${selected === "/" ? "text-white underline" : "text-white/60"}`} to="/">home</Link>
            <Link className={`text-white ${selected === "/hry" ? "text-white underline" : "text-white/60"}`} to="/hry">hry</Link>
            <Link className={`text-white ${selected === "/pravidla" ? "text-white underline" : "text-white/60"}`} to="/pravidla">komunitní pravidla</Link>
            <Link className={`text-white ${selected === "/novinky" ? "text-white underline" : "text-white/60"}`} to="/novinky">novinky</Link>
            <Link className={`text-white ${selected === "/kontakt" ? "text-white underline" : "text-white/60"}`} to="/kontakt">kontakt</Link>
        </nav>
  )
}

export default Navbar