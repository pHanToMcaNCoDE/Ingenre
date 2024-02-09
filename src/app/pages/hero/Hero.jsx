'use client';

import React, { useEffect, useState } from 'react'
import icon from '../../assets/gaming.png'
import Image from 'next/image'
import axios from 'axios'
import Navbar from '@/app/components/Navbar';
import Display from '@/app/components/Display';

const Hero = ({animes}) => {

  return (
    <section className='p-2'>
      <Navbar/>

      {/* Hero */}
      <section className='bg-zinc-100 flex flex-col items-center min-h-screen'>
        <div className='flex justify-center gap-x-6 items-center py-6 px-2 lg:px-0'>
          <div>
              <Image className='object-contain lg:w-[5rem] h-[5rem]' src={icon} alt='Ingenre Logo' width={100} height={100}></Image>
          </div>
          <div>
              <h1 className='text-4xl lg:text-6xl text-blue-400 font-mono tracking-widest leading-snug text-center'>Ingenre</h1>
              <p className='text-center tracking-wider text-[.8rem] md:text-lg lg:text-xl text-[#555] font-mono leading-10'>Get a quick list of animes to watch</p>
          </div>
        </div>

        {/* Display */}
        
        <Display animes={animes}/>
        
      </section>
    </section>
  )
}

export default Hero
