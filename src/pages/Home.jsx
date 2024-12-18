import {Games, Navbar, About, News } from '../components'
import Logo from '../assets/logo.png'
import City from '../assets/city.jpg'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-black'>
        <img src={City} alt="background" className='absolute h-[800px] w-full opacity-50 top-[-100px] z-0' />
        <div className='flex justify-center items-start gap-20'>
            <img src={Logo} alt="logo" className='w-[180px] z-10 mt-3' />
            <Navbar />
        </div>
        <Games />
        <About />
        <div className='h-[100px]'></div>
        <News />
    </div>
  )
}

export default Home