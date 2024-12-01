import React from 'react'
import image from '../src/assets/logo.png'

function App() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black from-40% to-teal-700 lg:bg-gradient-to-r from-black  from-% to-teal-700	 text-white'>

    <nav className='bg-gray-40 pt-3	'>
      <div className=' flex justify-evenly items-center'  >
        <a href="" className='w-[50%] bg-gray-5 h-[1%] sm:w-[20%]' >
          <img src="../src/assets/logoo.png" alt="" className='w-[60%] h-[10%]'/>
          </a>
        <ul className='hidden lg:flex justify-between w-[30%]'>
          <li>Home</li>
          <li>How it work</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        <button className='border-solid border-2 border-white rounded-3xl text-xs	px-3 lg:w-[10%] h-8'>Download App</button>
      </div>
    </nav>

    <section className='px-8 sm:px-14 lg:px-56'>
      <h1 className='text-4xl	mt-20 font-black leading-snug	 sm:text-7xl '>Empower Your <br /> Finances!</h1>
      <p className='opacity-50 mt-2 md:text-lg'>Empowering Your Financial Journey With Innovative Solutions </p>
    <p className='font-bold text-3xl mt-8'>1200 <sup>+</sup></p>
    <p className='text-green-200	'>Specialists</p>
    <p className='opacity-50 mt-2 md:text-lg'>We believe that managing Your finances should be simple, secure, and empowering. Our innovative tools and personalized service are designed to help you achieve your financial goals with conidence.</p>
      <button className='w-1/2 h-10 border-2 bg-emerald-950  rounded-3xl mt-8 ml-[15%] sm:ml-[25%] lg:mt-16 lg:h-14 lg:bg-teal-800 lg:border-none'>Get Started</button>
    </section>
    </div>
  )
}

export default App