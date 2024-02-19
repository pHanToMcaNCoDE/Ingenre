// 'use client';

import Details from '../../components/Details'
// import { FaBookJournalWhills } from "react-icons/fa6";

const AnimeDetails = async ({params}) => {

  const generateStaticParams = async () => {
    const response = await fetch('https://api.jikan.moe/v4/anime')

    const data = await response.json()
 
    return data.data.map((anime) => ({
      slug: anime.mal_id.toString(),
    }))
  }

  const getAnime = async (mal_id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)

    const data = await res.json()
    return data
  }


  const anime = await getAnime(params.mal_id)

  return (
    <section className="lg:max-w-[1300px] ml-0 lg:ml-[12.5rem] px-1 h-screen bg-zinc-900">
       
      <Details anime={anime} />
    </section>
  );
};

export default AnimeDetails;
