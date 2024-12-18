import Fivem_M from '../assets/Fivem_military.png';
import Fivem_RP from '../assets/Fivem_rp.png';
import Rust from '../assets/rust.png';
import Minecraft from '../assets/minecraft.png';

const Games = () => {
  return (
    <div className='w-full mt-[280px] flex justify-center items-center font-inter gap-4'>
        <div
            className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center mb-10'
            style={{
                background: `url(${Fivem_RP})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                <p>Aktivní hráči</p>
                <p>100/669</p>
            </div>
        </div>
        <div
            className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center mb-20'
            style={{
                background: `url(${Fivem_M})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                <p>Aktivní hráči</p>
                <p>100/669</p>
            </div>
        </div>
        <div
            className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center mb-10'
            style={{
                background: `url(${Rust})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                <p>Aktivní hráči</p>
                <p>100/669</p>
            </div>
        </div>
        <div
            className='w-[200px] h-[200px] z-10 bg-no-repeat bg-center'
            style={{
                background: `url(${Minecraft})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6'>
                <p>Aktivní hráči</p>
                <p>100/669</p>
            </div>
        </div>
    </div>
  )
}

export default Games;