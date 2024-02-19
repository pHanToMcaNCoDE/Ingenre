'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import { SlEye } from "react-icons/sl";

const ActionSnapScroll = ({ animes }) => {

  const [cardState, setCardState] = useState([])
    
const toggleOverlay = (mal_id) => {
  setCardState((prevState) => {
    if (prevState.includes(mal_id)) {
      return prevState.filter((id) => id !== mal_id);
    } else {
      return [...prevState, mal_id];
    }
  });
};



  return (
    <section>
      <style>{`
        .scroll-container::-webkit-scrollbar {
          display: none; 
        }
        .scroll-container {
          overflow-x: hidden; 
        }
      `}</style>
      <h1 className='max-w-[1120px] mx-auto text-[1.3rem] font-mono tracking-wiser pb-[2em] text-gray-200'>Action / Sci-Fi Animes</h1>
      
      <div className='flex justify-between items-center snap-x snap-mandatory gap-x-5 scroll-container' style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', WebkitOverflowScrolling: 'touch' }}>
        {animes.data ? animes.data.slice(12, 21).map((anime) => (
          <div onMouseEnter={() => toggleOverlay(anime.mal_id)}
                onMouseLeave={() => toggleOverlay(anime.mal_id)} className='w-[12rem] snap-start scroll-ml-6 flex-shrink-0' key={anime.mal_id} style={{ scrollSnapAlign: 'start' }}>
            <div className='relative'>
              {/* Overlay */}
              <div className={cardState.includes(anime.mal_id) ? 'duration-300 transition-all w-full z-10 min-h-full bg-[#000]/20 absolute flex' : 'duration-300 transition-all w-full z-10 min-h-0 bg-[#000]/20 absolute hidden'}>
                <SlEye size={27} className='z-20 duration-300 hover:scale-110 cursor-pointer absolute top-2 right-2 p-1 bg-neutral-600 text-white rounded-full' />
              </div>
              <Image
                className='relative rounded-t-[.4rem]'
                src={anime.images ? anime.images.webp.large_image_url : ''}
                alt={anime.title}
                width={250}
                height={80}
              />
            </div>
            <div className='bg-neutral-800 flex flex-col items-start p-1 rounded-b-[.2rem]'>
              <h1 className='text-[.925rem] text-white font-mono tracking-wider'>{anime.title}</h1>
              <p className='text-[.825rem] font-mono tracking-wider text-gray-500 rounded-[.3rem] px-1'>{anime.title_japanese}</p>
            </div>
          </div>
        )) : null}
      </div>
    </section>
  );
};

export default ActionSnapScroll;
