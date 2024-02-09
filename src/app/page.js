'use client';

import Hero from "./pages/hero/Hero";
import Genres from "./pages/genres/Genres";
import {HashLoader} from 'react-spinners';
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {

  const [animes, setAnimes] = useState({})
  const [loading, setLoading] = useState(false)

    const fetchData = async () => {
      const response = await axios.get('https://api.jikan.moe/v4/anime')
      
      setAnimes(response.data)
      setLoading(true)
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <main className="w-full lg:max-w-[1225px] lg:ml-[12.5rem]">
      {
        loading ? 
        <>
          <Hero animes={animes}/>
          <Genres animes={animes}/>
        </> 
        : 
        <div className='flex my-auto h-screen justify-center items-center gap-x-3'>
          <HashLoader className='animate-bounce px-3 py-10 h-[50vh]' color="#4fbfeb" />
          <p className='font-mono tracking-[1rem] text-[1.2rem] text-[#555] font-bold'>LOADING...</p>
        </div>
      }
    </main>
  );
}
