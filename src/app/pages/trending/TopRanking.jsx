import Image from 'next/image';
import React, { useState } from 'react';
import { TiArrowRightOutline } from "react-icons/ti";
import { BiSolidLike } from "react-icons/bi";
import animation from '../../assets/Animation - 1707422315623.gif'

const TopRanking = ({ animes }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedCards, setLikedCards] = useState([]);

  const toggleLiked = (mal_id) => {
    if (likedCards.includes(mal_id)) {
      setLikedCards(likedCards.filter((id) => id !== mal_id));
    } else {
      setLikedCards([...likedCards, mal_id]);
    }
  };

  const sortedAnimes = animes.data && [...animes.data].sort((a, b) => a.rank - b.rank);

  return (
    <section className='px-4 py-[80px] max-w-[1200px] mx-auto'>
      <h1 className='text-[1.3rem] font-mono tracking-wiser pb-[2em]'>Top Rated Anime</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {sortedAnimes && sortedAnimes.slice(5, 9).map((item) => (
          <div
            key={item.mal_id}
            onMouseEnter={() => setHoveredCard(item.mal_id)}
            onMouseLeave={() => setHoveredCard(null)}
            className='lg:w-[17em] relative cursor-pointer'
          >
            {item.images && item.rank >= 45 && (
              <Image
                className='object-cover relative rounded-t-[.3rem]'
                src={item.images.jpg.large_image_url}
                alt={item.title}
                width={300}
                height={230}
              />
            )}
            <div className='absolute top-0 right-0 p-1'>
              <div className={likedCards.includes(item.mal_id) ?   `absolute rounded-full h-[2rem] w-[2rem] border border-gray-500 bg-gray-600 animate-ping` : `absolute rounded-full h-[2rem] w-[2rem] border border-red-500 bg-red-600 animate-ping`}></div>
              <BiSolidLike
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLiked(item.mal_id);
                }}
                 className={`relative z-20 rounded-full p-1 ${likedCards.includes(item.mal_id) ? 'text-gray-400' : 'text-red-500'}`}
                size={30}
              />
            </div>

            <div
              className='lg:w-[17em] duration-300 opacity-0 hover:opacity-100 absolute bg-[#000]/30 min-h-[75%] w-0 top-0'
            ></div>

            <div className='absolute top-0 bg-gray-200 p-1 rounded-ee-[.5rem] text-[#555] font-mono tracking-widest'>
              {item.type === 'TV' ? 'Series' : 'Movie'}
            </div>

            <div className='bg-[#fff] flex flex-col items-start p-2 rounded-b-[1rem]'>
              <div className='flex justify-between w-full gap-x-3 items-center'>
                <h1 className='text-[.925rem] text-blue-500 font-mono tracking-wider'>
                  {item.title}
                </h1>
                <p className='text-[.825rem] font-mono tracking-wider text-zinc-500 rounded-[.3rem] px-1'>
                  {item.year}
                </p>
              </div>
              <h1 className='w-full px-1 text-[.925rem] text-black font-mono tracking-wider'>
                {item.titles && item.title_japanese ? item.title_japanese : 'Nil'}
              </h1>
              <div className='bg-[#fff] flex items-center justify-between w-full pt-2 gap-x-[.3rem]'>
                <p className='text-[.825rem] font-mono tracking-wider text-zinc-500'>
                  {item.episodes} episode(s)
                </p>
                <p className='text-[.825rem] font-mono tracking-wider text-red-500 bg-red-100 rounded-[.3rem] px-1'>
                  Action
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className='py-[4em]'>
        <div className='flex justify-center items-center duration-300 hover:-translate-x-2 relative hover:-translate-y-2'>
          <div className='p-2 bg-blue-200 rounded-[.3rem] h-[3em] w-[10em] absolute translate-x-2 translate-y-1'></div>
          <button className='duration-300 hover:-translate-x-2 hover:-translate-y-2 flex items-center gap-x-3 bg-blue-50 absolute border-2 border-blue-300 rounded-[.3rem] px-2 py-1 text-blue-400 w-[10em] h-[3em] font-mono tracking-widest'>
            View more <TiArrowRightOutline size={21} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default TopRanking;
