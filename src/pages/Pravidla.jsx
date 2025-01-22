import React from 'react'
import { motion } from 'motion/react'
import { Findus, Footer, Navbar } from '../components'
import City from '../assets/city.jpg'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import FivemLogo from '../assets/fivemrp_logo.png'
import { LinearGradient } from 'react-text-gradients'

const pravidla = [
    {
        id: 1,
        heading: "Respektování ostatních hráčů",
        content: "Vždy zacházejte s hráči s respektem a zdvořilostí. Nediskriminujte hráče na základě jejich věku, pohlaví, rasy, náboženství nebo jakéhokoli jiného osobního znaku."
    },
    {
        id: 2,
        heading: "Zákaz podvádění",
        content: "Používání cheatů, exploitů nebo jiných nelegitimních prostředků k získání výhody je přísně zakázáno."
    },
    {
        id: 3,
        heading: "Roleplay pravidla",
        content: "Dodržujte pravidla roleplay. Chovejte se podle vaší postavy a vyhýbejte se jednání, které by narušovalo zážitek ostatních."
    },
    {
        id: 4,
        heading: "Nevhodné chování",
        content: "Vyhněte se nevhodnému chování, jako je obtěžování, trolling nebo spamování ostatních hráčů."
    },
    {
        id: 5,
        heading: "Zákaz reklam",
        content: "Nereklamujte jiné servery, webové stránky nebo služby bez výslovného povolení administrátorů."
    },
    {
        id: 6,
        heading: "Použití správných kanálů",
        content: "Komunikujte ve správných textových a hlasových kanálech. Nepřerušujte ostatní nevhodnými komentáři."
    },
    {
        id: 7,
        heading: "Zákaz real-life hrozeb",
        content: "Jakékoli hrozby vůči ostatním hráčům, včetně fyzických nebo právních, jsou přísně zakázány."
    },
    {
        id: 8,
        heading: "Ochrana soukromí",
        content: "Nezveřejňujte osobní informace ostatních hráčů bez jejich souhlasu."
    },
    {
        id: 9,
        heading: "Dodržování pokynů administrátorů",
        content: "Respektujte rozhodnutí a pokyny administrátorů. Neuposlechnutí může vést k sankcím."
    },
    {
        id: 10,
        heading: "Fair-play",
        content: "Hrajte čestně a přispívejte k pozitivnímu prostředí na serveru."
    }
];



const rimskeCislice = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "11": "XI"
}
  



const Pravidla = () => {
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
        <div>
            <div className='text-white absolute top-[460px] left-[20vw] flex justify-center items-center gap-6'>
                <Link to="/" className="text-white hover:text-gray-400 underline">home</Link>
                <p>/</p>
                <p>pravidla</p>
            </div>

            <div className='absolute top-[490px] bg-black flex flex-col justify-center items-center w-full'>
                <div className='w-[60%] py-10'>
                    <LinearGradient 
                        gradient={['to right', '#7728FF ,#585858']}
                        className='mt-8 text-5xl font-bold'
                    >
                        Komunitní pravidla
                    </LinearGradient>

                    <div className="w-full grid grid-rows-5 grid-flow-col mt-10">
                        {pravidla.map((pravidlo) => (
                            <div
                                key={pravidlo.id}
                                className="p-4 text-white py-10"
                                style={{
                                    background:
                                    pravidlo.id % 2 === 0
                                        ? "#000000"
                                        : "linear-gradient(to right, #171717, #000000)",
                                }}
                                >
                                <div className="flex justify-start items-center gap-6">
                                    <h2 className="text-[#7728FF] text-2xl font-[700]">{rimskeCislice[pravidlo.id]}</h2>
                                    <h3 className='text-lg font-[700]'>{pravidlo.heading}</h3>
                                </div>
                                <p className='mt-4 w-[83%] mx-auto block text-[#898989]'>{pravidlo.content}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div
                        className="p-4 text-white py-10 bg-black w-[700px] mx-auto"
                    >
                        <div className="flex justify-start items-center gap-6 w-[400px]">
                            <h2 className="text-[#7728FF] text-2xl font-[700]">XI.</h2>
                            <h3 className='text-lg font-[700]'>Řešení reportů</h3>
                        </div>
                        <p className='mt-4 block text-[#898989] w-[700px]'>
                        Všechny reporty se budou řešit na discordu po RP akci, pokud tam nebude nějaké porušení pravidel, které ovlivňuje další RP. Pokud se nalezne porušení pravidel závažných tak je možné RP akci stopnout a jít řešit na discordu.  Zákaz řešení svých akci a členů své frakce krom výjimek, lidé kteří smějí řešit své frakce jsou označeni rolí Výjimka řešení REPORTŮ.
                        </p>
                    </div>


                </div>
                <Findus />
                <Footer />
            </div>
        </div>
    </div>
)}

export default Pravidla;