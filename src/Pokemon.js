export default function Pokemon({ pokemon }) {
  return (
    <div>
      <p>{pokemon.pokemon}</p>
      <img src={pokemon.url_image}/>
    </div>
  );
}