import React from 'react'
import { motion } from 'motion/react'
import { Findus, Footer, Navbar } from '../components'
import City from '../assets/city.jpg'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import FivemLogo from '../assets/fivemrp_logo.png'


const FiveM_RP = () => {
  return (
    <div className='w-full min-h-screen bg-black font-inter'>
        <img
          src={City} 
          alt="background" 
          className='absolute h-[800px] w-full opacity-30 top-[-120px] z-0'
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
        <div>
          <div className='text-white absolute top-[460px] left-[25vw] flex justify-center items-center gap-6'>
            <Link to="/" className="text-white hover:text-gray-400 underline">home</Link>
            <p>/</p>
            <Link to="/hry/" className="text-white hover:text-gray-400 underline">hry</Link>
            <p>/</p>
            <p>fivem rp</p>
          </div>

          <div className='mx-auto w-[60%] bg-black flex justify-center items-center gap-14 text-white mt-[300px] pt-10'>
            <div className='z-10 w-[50%] my-[50px] font-inter'>
                <h1 className='text-[#FF7700] font-[300] text-4xl mb-8'>FiveM RP</h1>
                <p className='text-[#898989] font-[500]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p>
            </div>

            <div className='bg-[#141414] w-[50%] p-10 pr-0 py-6 rounded-2xl z-10 flex justify-between items-center'>
                <div>
                    <div>
                        <h3 className='font-[700] text-[#FF7100]'>Aktivní hráči</h3>
                        <p className='font-[400] text-[#9C9C9C]'>28/200</p>
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-[700] text-[#FF7100]'>Odkaz na server</h3>
                        <a className='font-[400] text-[#9C9C9C] underline'>fivem-rp.sun-wave.cz</a>
                    </div>
                </div>
                <img 
                    src={FivemLogo} 
                    alt="FivemRP logo" 
                    className='w-[60%]'
                />
            </div>
          </div>
        </div>

        <div className='bg-[#141414] w-full py-[50px] mt-10 relative font-inter flex justify-center items-center flex-col'>
            <div className='w-full h-[80px] bg-[#FF7100] absolute top-[60%] z-5' />

            <div className='flex justify-center items-center flex-col w-[60%]'>
                <h2 className='font-[700] text-[#FF7100] text-4xl w-full'>VIP serveru</h2>

                <div className='flex justify-between items-center w-full'>
                    <p className='font-400 text-white mt-5'>
                        Chcete podpořit náš projekt? Níže je pár VIPs ze serveru a zbytek <br /> naleznete na našem 
                        <a href="/" className='underline'> tebexu</a>
                        .
                    </p>
                    
                    <button 
                        className='bg-gradient-to-r from-[#FF7100] to-[#A60303] hover:from-[#FFB275] hover:to-[#FF3131] py-3 px-8 mt-10 rounded-2xl flex justify-around items-center gap-4 text-white underline'
                    >
                        VŠECHNY BALÍČKY
                    </button>
                </div>

                <div className="flex justify-between gap-6 items-center w-full mt-20">

                    <div className='z-10 w-[33%] aspect-[4/3.3] bg-[#1E1E1E] p-6 shadow-lg shadow-black'>
                        <h3 className='text-white font-[500] text-xl border-b border-b-white inline'>SPECIAL</h3>
                        <h4 className='text-[#FF7700] font-[700] text-xl mt-2'>80€</h4>

                        <div className='flex items-center justify-start gap-3 mt-4'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>10x Fixkit</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>3x Custom SPZ</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>1x Interiér do hodnoty 50€</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>800 SunCoins</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>1x V.I.P vozidlo</span>
                        </div>
                    </div>

                    <div className='z-10 w-[33%] aspect-[4/3.3] bg-[#1E1E1E] p-6 shadow-lg shadow-black'>
                        <h3 className='text-white font-[500] text-xl border-b border-b-white inline'>SPECIAL</h3>
                        <h4 className='text-[#FF7700] font-[700] text-xl mt-2'>80€</h4>

                        <div className='flex items-center justify-start gap-3 mt-4'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>10x Fixkit</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>3x Custom SPZ</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>1x Interiér do hodnoty 50€</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>800 SunCoins</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>1x V.I.P vozidlo</span>
                        </div>
                    </div>

                    <div className='z-10 w-[33%] aspect-[4/3.3] bg-[#1E1E1E] p-6 shadow-lg shadow-black'>
                        <h3 className='text-white font-[500] text-xl border-b border-b-white inline'>SPECIAL</h3>
                        <h4 className='text-[#FF7700] font-[700] text-xl mt-2'>80€</h4>

                        <div className='flex items-center justify-start gap-3 mt-4'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>10x Fixkit</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>3x Custom SPZ</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>1x Interiér do hodnoty 50€</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>800 SunCoins</span>
                        </div>
                        <div className='flex items-center justify-start gap-3 mt-2'>
                            <span className='text-[#FF7700]'>&gt;</span>
                            <span className='text-white text-sm font-500'>1x V.I.P vozidlo</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className='w-full py-[50px] bg-black flex justify-center items-center'>
            <form className='w-[60%]'>
                <h2 className='font-[700] text-[#FF7100] text-4xl w-full'>WL formulář</h2>

                <div className='flex justify-center items-center mt-6 gap-10'>
                    <div className='w-[45%]'>
                        <label htmlFor='jmeno' className='text-white font-[700]'>*Jméno</label>
                        <input id="jmeno" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 mb-4 text-white' />

                        <label htmlFor='email' className='text-white font-[700] mt-3'>*E-mail</label>
                        <input id="email" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 mb-4 text-white' />

                        <label htmlFor='telefon' className='text-white font-[700] mt-3'>Telefon</label>
                        <input id="telefon" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                    </div>

                    <div className='w-[55%] h-full relative'>
                        <label htmlFor='zprava' className='text-white font-[700] mt-3'>Poznámka</label>
                        <textarea id="zprava" type="text" style={{ resize: "none" }} className='w-full h-[230px] rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        <img src={FivemLogo} alt="fivem logo" className='w-[250px] absolute bottom-2 right-0 opacity-40'/>
                    </div>
                </div>

                <p className='font-inter text-white mt-10 text-sm'>
                    Vámi zadané osobní údaje budeme zpracovávat my, a to pro možnost vám odpovědět. Bližší informace naleznete v zásadách zpracování osobních údajů
                </p>

                <button 
                    className='bg-gradient-to-r from-[#FF7100] to-[#A60303] hover:from-[#FFB275] hover:to-[#FF3131] py-3 px-16 ml-auto mt-10 rounded-2xl flex justify-around items-center gap-4 text-white underline'
                >
                    ODESLAT
                </button>
            </form>
        </div>

        <Findus />

        <Footer />
    </div>
)}

export default FiveM_RP;