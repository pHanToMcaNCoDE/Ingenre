import GenreDisplay from '@/app/components/GenreDisplay'
import React from 'react'

const Genres = ({animes}) => {
  return (
    <section className='px-4 py-[100px] max-w-[1200px] mx-auto'>
      <h1 className='px-4 text-[1.3rem] font-mono tracking-wider pb-[2em]'>Genre</h1>

      {/* Display */}
      <GenreDisplay animes={animes}/>
    </section>
  )
}

export default Genres
