import Image from 'next/image'
import React from 'react'
import bg from '../../../public/bg.jpg'

const AnimeDetails = ({ anime }) => {
  return (
    <section>

      <div className='flex items-center pt-[1em] lg:ml-[6em] gap-x-3 z-20 w-[90%]'>
          <div className='lg:flex hidden w-[30%]'>
            {
              anime.data ? (
                <Image className='object-contain p-1' src={anime.data ? anime.data.images.webp.image_url : ''} alt={anime.data.title} width={400} height={400}></Image>
              ) 
              :
              ''
            }
          </div>
          <div className='flex flex-col justify-start items-start w-[70%]'>
            <h1 className='text-[2rem] text-white font-mono font-bold text-center lg:text-left tracking-wide'>{anime.data.title}</h1>
            <p className='text-white'>{anime.data.synopsis}</p>
          </div>

      </div>

    </section>
  )
}

export default AnimeDetails
