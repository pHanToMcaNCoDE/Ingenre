'use client';

import React, { useEffect, useState } from 'react'
import icon from '../../assets/gaming.png'
import Image from 'next/image'
import axios from 'axios'

const Hero = () => {

    // const [data, setData] = useState({})

    // Function to fetch data from api

    // const fetchData = async () => {
    //     const response = await axios.get('https://api.jikan.moe/v4/anime')
    //     console.log(response.data)
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

  return (
    <main className='max-w-[1250px] ml-[13rem] p-2'>
      <section className='w-[full] py-4 px-3 h-[70px]'>
          <input className='w-[40%] rounded-[1rem] p-2' type='text' placeholder='Search for your anime of choice...'></input>
      </section>
      <section className='bg-zinc-100 flex justify-center gap-x-6 items-center h-screen'>
        <div>
            <Image src={icon} alt='Ingenre Logo' width={100} height={100}></Image>
        </div>
        <div>
            <h1 className='text-8xl text-blue-400 font-mono tracking-widest leading-snug text-center'>Ingenre</h1>
            <p className='text-center tracking-wider text-xl text-[#555] font-mono leading-10'>Get a quick list of animes to watch</p>
        </div>
      </section>
    </main>
  )
}

export default Hero
