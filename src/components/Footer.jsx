import React from 'react'

const Footer = () => {
  return (
    <div className='font-inter w-full bg-black px-4 py-8 flex justify-around items-center text-sm flex-wrap'>
        <p className='text-gray-600'>© Copyright 2025. All Rights Reserved.</p>
        <a
            className='text-gray-600 underline'
            href="https://vuzuco.cz"
        >Made by Vuzuco</a>
    </div>
  )
}

export default Footer