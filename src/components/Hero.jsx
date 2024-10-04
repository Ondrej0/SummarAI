import React from 'react'
import logo from "../assets/logo.png"

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='w-full flex justify-start items-center flex-row mb-10 pt-3'>
            <img src={logo} alt='logo' className='w-10'/>
            <h1 className='font-sans font-semibold text-stone-800 text-xl tracking-tight'>SummarAI</h1>
        </nav>
        <h1 className='head_text'>
            <span className='text-stone-800'>Summarise any Article with</span> <br/>
            <span className='blue_gradient'>The Power of AI</span>
        </h1>
        <h2 className='desc'>Unlock the potential of artificial intelligence to effortlessly 
            transform complex articles into clear, concise summaries. Whether you're a student, a professional, 
            or a casual reader, our AI-driven tool helps you grasp the essence of any text quickly and efficiently.</h2>
    </header>
  )
}

export default Hero