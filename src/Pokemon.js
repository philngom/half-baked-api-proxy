import './Pokemon.css';

export default function Pokemon({ pokemon }) {
  return (
    <div className='pokemon'>
      <p>{pokemon.pokemon}</p>
      <img src={pokemon.url_image}/>
    </div>
  );
}