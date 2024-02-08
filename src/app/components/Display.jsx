import Image from 'next/image'
import React from 'react'

const Display = ({animes}) => {
  return (
    <section className='flex'>
      {animes.data && animes.data.slice(0, 1).map((item) => (
        <div key={item.mal_id}>
          {item.trailer && item.trailer.images && item.trailer.images.medium_image_url && (
            <Image src={item.trailer.images.maximum_image_url} alt='' width={1000} height={500} />
          )}
        </div>
      ))}
    </section>
  )
}

export default Display
