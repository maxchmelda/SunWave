import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion'; // Corrected import
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const selected = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="max-[1035px]:hidden inline-flex justify-center z-10 font-inter items-center gap-20 py-3 px-6 border-b border-b-custom-border mt-10"
      >
        <Link className={`hover:underline text-white ${selected === "/" ? "text-white underline" : "text-white/60"}`} to="/">home</Link>
        <Link className={`hover:underline text-white ${selected === "/hry" ? "text-white underline" : "text-white/60"}`} to="/hry">hry</Link>
        <Link className={`hover:underline text-white ${selected === "/pravidla" ? "text-white underline" : "text-white/60"}`} to="/pravidla">komunitní pravidla</Link>
        <Link className={`hover:underline text-white ${selected === "/novinky" ? "text-white underline" : "text-white/60"}`} to="/novinky">novinky</Link>
        <Link className={`hover:underline text-white ${selected === "/kontakt" ? "text-white underline" : "text-white/60"}`} to="/kontakt">kontakt</Link>
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-10 min-[1035px]:hidden mr-5"
      >
        <FiMenu color={"white"} className='w-[30px] h-[30px]' />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-[1035px]:hidden text-white z-20 underline rounded-xl font-inter font-[400] text-sm absolute top-32 right-5 bg-[#1D1D1D] py-3 px-6 shadow-white/40 shadow-md flex flex-col justify-center items-center gap-2"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>home</Link>
          <Link to="/hry" onClick={() => setIsOpen(false)}>hry</Link>
          <Link to="/pravidla" onClick={() => setIsOpen(false)}>komunitní pravidla</Link>
          <Link to="/novinky" onClick={() => setIsOpen(false)}>novinky</Link>
          <Link to="/kontakt" onClick={() => setIsOpen(false)}>kontakt</Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
