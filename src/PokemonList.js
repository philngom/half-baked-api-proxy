import Pokemon from './Pokemon.js';

export default function PokemonList({ pokemons }) {
  return (
    <div>
      {
        pokemons.map((pokemon, i) =>
          <Pokemon key={pokemon + i} pokemon={pokemon}/>
        )
      }
    </div>
  );
}