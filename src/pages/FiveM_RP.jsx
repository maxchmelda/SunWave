import { useState, useRef } from "react";
import { motion } from 'motion/react';
import { Findus, Footer, Navbar } from '../components';
import City from '../assets/city.jpg';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import FivemLogo from '../assets/fivemrp_logo.png';
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const FiveM_RP = () => {
    const recaptchaRef = useRef(null);
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleOpenPDF = (pdfPath) => {
        window.open("/" + pdfPath, "_blank");
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (!captchaValue) {
            alert("Prosím potvrďte že nejste robot");
            return;
        }
    
        for (const [key, value] of Object.entries(data)) {
            if (!value.trim()) {
                alert(`Pole "${key}" je povinné.`);
                return;
            }
        }
    
        emailjs
            .send(
                "service_jfteece", 
                "template_r9giaul",
                data,
                "itCNXwypxWuN7-26Y"
            )
            .then(
                (response) => {
                    alert("Formulář odeslán úspěšně!");
                    recaptchaRef.current.reset();
                    setCaptchaValue(null);
                },
                (error) => {
                    alert("Formulář se nepodařilo odeslat");
                }
            );  
    };
    
    
    


  return (
    <div className='w-full min-h-screen bg-black'>
        <div 
            className='absolute h-[400px] w-full sm:top-[100px] top-[50px] z-0 opacity-25'
            style={{
            backgroundImage: `url(${City})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        />

        <div className='absolute z-5 top-[350px] sm:top-[450px] w-full h-[400px] bg-gradient-to-b from-[#0000002a] via-[#000000] to-[#00000000]' />
        <div className='absolute z-5 top-[0px] w-full h-[150px] bg-gradient-to-b from-black to-[#0000002a]' />

        <div className='flex justify-around items-start max-[1035px]:items-center max-[1035px]:justify-between max-[1035px]:px-20 max-[530px]:px-2'>
            <div className='pl-32 max-[530px]:pl-28'>
            <motion.img 
                initial={{ x: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
                src={Logo} 
                alt="logo" 
                className='w-[180px] z-10 mt-3 max-[530px]:w-[120px]' 
            />
            </div>
            <Navbar />
        </div>
        <div>
            <div className='text-white absolute top-[350px] sm:top-[460px] sm:left-[20vw] left-[5vw] flex justify-center items-center gap-6'>
                <Link to="/" className="text-white hover:text-gray-400 underline">home</Link>
                <p>/</p>
                <p>pravidla</p>
            </div>

          <div className='mx-auto max-sm:w-full w-[80%] bg-black flex justify-center items-center max-sm:gap-2 gap-14 text-white mt-[300px] max-sm:mt-[200px] max-md:flex-wrap pt-10'>
            <div className='z-10 w-[50%] max-md:w-[80%] my-[50px] font-inter'>
                <h1 className='text-[#FF7700] font-[300] text-4xl mb-8 max-sm:mb-4'>FiveM RP</h1>
                <p className='text-[#898989] font-[500]'>FiveM RP je multiplayerová modifikace pro GTA V, která přináší realistický roleplay. Hráči si vytvářejí vlastní postavy a žijí jejich příběhy v dynamickém světě. Můžete se stát policistou, podnikatelem nebo členem gangu – možnosti jsou téměř neomezené. Každé rozhodnutí ovlivňuje vaši cestu, a právě to dělá FiveM RP jedinečným zážitkem.</p>
                <div className='flex justify-start items-center sm:gap-10 gap-0 flex-wrap'>
                    <button 
                            className='bg-gradient-to-r from-[#A60303] to-[#FF7100] hover:from-[#FF3131] hover:to-[#FFB275] py-3 px-8 mt-10 rounded-2xl flex justify-around items-center gap-4 text-white'
                            onClick={() => handleOpenPDF('frakce.pdf')}
                        >
                            Nelegální frakce
                    </button>
                    <button 
                            className='bg-gradient-to-r from-[#FF7100] to-[#A60303] hover:from-[#FFB275] hover:to-[#FF3131] py-3 px-8 sm:mt-10 mt-5 rounded-2xl flex justify-around items-center gap-4 text-white'
                            onClick={() => handleOpenPDF('RP.pdf')}
                        >
                            Pravidla roleplay
                    </button>
                </div>
            </div>

            <div className='bg-[#141414] relative w-[50%] max-md:w-[80%] p-10 pr-0 max-sm:pr-8 py-6 rounded-2xl z-10 flex justify-between items-center'>
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
                    className='w-[60%] max-sm:absolute max-sm:w-[40%] max-sm:right-0 max-sm:top-8 max-sm:opacity-60'
                />
            </div>
          </div>
        </div>

        {/* responsive pls */}
        <div className='bg-[#141414] w-full py-[50px] mt-10 relative font-inter flex justify-center items-center flex-col'>
            <div className='w-full h-[80px] bg-[#FF7100] absolute top-[60%] z-5' />

            <div className='flex justify-center items-center flex-col w-[60%] min-[1000px]:w-[80%] max-sm:w-[90%]'>
                <h2 className='font-[700] text-[#FF7100] text-4xl w-full'>VIP serveru</h2>

                <div className='flex justify-between items-center w-full flex-wrap'>
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

                <div 
                    className="flex justify-between gap-6 items-center w-full mt-20 max-[1000px]:flex-wrap"
                >

                    <div className='z-10 w-full md:w-[50%] min-[1000px]:w-[30%] aspect-[4/3.3] bg-[#1E1E1E] p-6 shadow-lg shadow-black'>
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

                    <div className='z-10 w-full md:w-[50%] min-[1000px]:w-[30%] aspect-[4/3.3] bg-[#1E1E1E] p-6 shadow-lg shadow-black'>
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

                    <div className='z-10 w-full md:w-[50%] min-[1000px]:w-[30%] aspect-[4/3.3] bg-[#1E1E1E] p-6 shadow-lg shadow-black'>
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
            <form 
                className='w-[60%] max-[770px]:w-[90%]'
                onSubmit={handleSubmit}
            >
                <h2 className='font-[700] text-[#FF7100] text-4xl w-full'>WL formulář</h2>

                <div 
                    className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5'
                >
                        <div>
                            <label htmlFor='discord' className='text-white font-[700]'>*Zde napište svůj discord</label>
                            <input id="discord" name="discord" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='osloveni' className='text-white font-[700]'>*Jak chcete být oslovováni</label>
                            <input id="osloveni" name="osloveni" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='vek' className='text-white font-[700]'>*Váš věk</label>
                            <input id="vek" name="vek" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='rp' className='text-white font-[700]'>*Co je RP?</label>
                            <input id="rp" name="rp" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='ooc' className='text-white font-[700]'>*Co je OOC?</label>
                            <input id="ooc" name="ooc" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='ic' className='text-white font-[700]'>*Co je IC?</label>
                            <input id="ic" name="ic" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='me' className='text-white font-[700]'>*Co je /me?</label>
                            <input id="me" name="me" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='do' className='text-white font-[700]'>*Co je /do?</label>
                            <input id="do" name="do" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='kos' className='text-white font-[700]'>*Co je KOS?</label>
                            <input id="kos" name="kos" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='rdm' className='text-white font-[700]'>*Co je RDM?</label>
                            <input id="rdm" name="rdm" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='vmd' className='text-white font-[700]'>*Co je VMD?</label>
                            <input id="vmd" name="vmd" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='ck' className='text-white font-[700]'>*Co je CK?</label>
                            <input id="ck" name="ck" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='pk' className='text-white font-[700]'>*Co je PK?</label>
                            <input id="pk" name="pk" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='sit1' className='text-white font-[700]'>*Jedeš na dálnici 120 km/h a nabouráš do NPC vozidla a neupadneš do Death Screen. (Jak to zarpíš?)</label>
                            <input id="sit1" name="sit1" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='sit2' className='text-white font-[700]'>*Jsi člen LSPD a uprostřed naháněčky se zločinec odpojí. (Jak se zachováš?)</label>
                            <input id="sit2" name="sit2" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='sit3' className='text-white font-[700]'>*Jsi gangster a do hoodu ti naběhne nepřátelský gang se zbraněmi a budou na tebe mířit. (Jak to zarpíš?) </label>
                            <input id="sit3" name="sit3" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div>
                            <label htmlFor='sit4' className='text-white font-[700]'>*OOC jsi se dozvěděl že nepřátelská nelegální frakce ti chce dát CK. (Jak se zachováš?) </label>
                            <input id="sit4" name="sit4" type="text" className='w-full rounded-3xl bg-[#171717] py-2 px-4 mt-3 text-white' />
                        </div>

                        <div className="flex justify-center items-center py-2">
                            <ReCAPTCHA
                                sitekey="6LcSHNAqAAAAAMUO5l9kQ0iCk3-0dr3OfJstjuHT"
                                onChange={(value) => setCaptchaValue(value)}
                                ref={recaptchaRef}
                            />
                        </div>
                </div>

                <p className='font-inter text-white mt-10 text-sm'>
                    Vámi zadané osobní údaje budeme zpracovávat my, a to pro možnost vám odpovědět. Bližší informace naleznete v zásadách zpracování osobních údajů
                </p>

                <button 
                    className='bg-gradient-to-r from-[#FF7100] to-[#A60303] hover:from-[#FFB275] hover:to-[#FF3131] py-3 px-16 ml-auto max-md:ml-0 mt-10 rounded-2xl flex justify-around items-center gap-4 text-white underline'
                    type="submit"
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
