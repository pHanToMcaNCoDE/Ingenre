import GenreDisplay from '@/app/components/GenreDisplay'
import React from 'react'

const Genres = ({animes}) => {
  return (
    <section className='px-4 py-[60px] max-w-[1200px] mx-auto'>
      <h1 className='text-[1.3rem] font-mono tracking-wiser pb-[2em]'>Genre</h1>

      {/* Display */}
      <GenreDisplay animes={animes}/>
    </section>
  )
}

export default Genres
