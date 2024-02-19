import Image from 'next/image'
import React from 'react'
import TopRanking from '../TopRated/page'


const Display = ({animes}) => {
  return (
    <section className='px-4 py-[100px] max-w-[1200px] mx-auto'>

      {/* Headding */}

      <h1 className='px-4 text-[1.3rem] font-mono tracking-wider pb-[1em] flex items-start text-gray-200'>Top Rated Animes</h1>

      {/* Top Rated Animes */}

      <TopRanking animes={animes}/>
    </section>
  )
}

export default Display
