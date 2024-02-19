import ActionSnapScroll from "../components/ActionSnapScroll";

const Action = ({ animes }) => {
  return (
    <section className='p-2 overflow-x-scroll' style={{ WebkitOverflowScrolling: 'touch' }}>
      <ActionSnapScroll animes={animes}/>
    </section>
  );
};

export default Action;
