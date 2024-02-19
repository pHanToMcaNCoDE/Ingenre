import GenreDisplay from '../components/GenreDisplay'
import React from 'react'

const Genres = ({animes}) => {
  return (
    <section className='px-4 pb-[100px] max-w-[1200px] mx-auto'>
      <h1 className='text-gray-200 px-4 text-[1.3rem] font-mono tracking-wider pb-[2em]'>Genre</h1>

      {/* Display */}
      <GenreDisplay animes={animes}/>
    </section>
  )
}

export default Genres
