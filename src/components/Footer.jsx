import React from 'react'

const Footer = () => {
  return (
    <div className='font-inter w-full bg-black py-8 flex justify-center items-center gap-32'>
        <p className='text-gray-600'>© Copyright 2025. All Rights Reserved.</p>
        <a
            className='text-gray-600 underline'
            href="https://vuzuco.cz"
        >Made by Vuzuco</a>
        <p className='text-transparent'>© Copyright 2025. All Rights Reserved.</p>
    </div>
  )
}

export default Footer