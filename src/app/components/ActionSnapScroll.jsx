import Image from 'next/image'
import React, { useState } from 'react'
import { SlEye } from "react-icons/sl";

const ActionSnapScroll = ({animes}) => {

    const [hovered, setHovered] = useState(false)
    const [card, setCard] = useState([])

    const ToggleOverlay = (mal_id) => {
        if(card.includes(mal_id)){
            setCard(card.filter(id => id != mal_id))
        }else{
            setCard([...card, mal_id])
        }
    }
  return (
    <section>
      <style>{`
        .scroll-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
        .scroll-container {
          overflow-x: hidden; /* Hide scrollbar for IE and Edge */
        }
      `}</style>
      <h1 className='max-w-[1120px] mx-auto text-[1.3rem] font-mono tracking-wiser pb-[2em]'>Action / Sci-Fi Animes</h1>
      <div className='flex justify-between items-center snap-x snap-mandatory gap-x-5 scroll-container' style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', WebkitOverflowScrolling: 'touch' }}>
        {
          animes.data ? animes.data.slice(12,21).map((anime) => (
            <div className='w-[12rem] snap-start scroll-ml-6 flex-shrink-0' key={anime.mal_id} style={{ scrollSnapAlign: 'start' }}>
              <div className='relative'>
                {/* Overlay */}
                <div className={hovered ? 'duration-300 transition-all w-full z-10 min-h-full bg-[#000]/20 absolute bottom-[0%] flex' : 'duration-300 transition-all w-full z-10 min-h-full bg-[#000]/20 absolute bottom-[-100%] hidden'}>
                    <SlEye size={25} className='z-20 duration-300 hover:scale-110 cursor-pointer absolute top-2 right-2 p-1 bg-zinc-200 rounded-full' />
                </div>
                <Image 
                onMouseEnter={(e) => {
                    e.preventDefault()
                    ToggleOverlay(anime.mal_id)
                    setHovered(true)
                }} 
                onMouseLeave={(e) => {
                    e.preventDefault()
                    setHovered(false)
                }}
                className='relative rounded-t-[.4rem]' src={anime.images ?  anime.images.webp.large_image_url : ''} alt={anime.title} width={250} height={80}></Image>

              </div>


              <div className='bg-zinc-50 flex flex-col items-start p-1 rounded-b-[.2rem]'>
                <h1 className='text-[.925rem] text-blue-500 font-mono tracking-wider'>{anime.title}</h1>
                <p className='text-[.825rem] font-mono tracking-wider text-zinc-500 rounded-[.3rem] px-1'>{anime.title_japanese}</p>
              </div>
            </div>
          )) : null
        }
      </div>
    </section>
  )
}

export default ActionSnapScroll