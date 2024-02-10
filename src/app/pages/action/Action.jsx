import ActionSnapScroll from '@/app/components/ActionSnapScroll';
import { Image } from 'next/image'; // Ensure Image is imported correctly

const Action = ({ animes }) => {
  return (
    <section className='p-2 overflow-x-scroll' style={{ WebkitOverflowScrolling: 'touch' }}>
      <ActionSnapScroll animes={animes}/>
    </section>
  );
};

export default Action;
