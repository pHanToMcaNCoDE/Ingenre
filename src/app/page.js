'use client';



import {HashLoader} from 'react-spinners';
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./hero/page";
import Genres from './genres/page';
import Action from './action/page';


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
    <main className="bg-zinc-900 w-full lg:max-w-[1225px] lg:ml-[12.5rem]">
      {
        loading ? 
        <>
          <Hero animes={animes}/>
          <Genres animes={animes}/>
          <Action animes={animes}/>
        </> 
        : 
        <div className='flex my-auto h-screen justify-center items-center gap-x-3'>
          <HashLoader className='animate-bounce px-3 py-10 h-[50vh]' color="#4fbfeb" />
          <p className='font-mono tracking-[.3rem] text-[1.2rem] text-[#555] font-bold'>LOADING...</p>
        </div>
      }
    </main>
  );
}
