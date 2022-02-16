import { useState } from 'react';
import PokemonList from './PokemonList';
import LoadingSpinner from './LoadingSpinner';

export default function PokemonSearch() {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('pikachu');
  const [pokemons, setPokemons] = useState([]);

  async function handlePokemonSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/.netlify/functions/pokemon?pokemon=${name}`);
    const json = await response.json();
    setLoading(false);
    setPokemons(json.json.results);

  }

  return (
    <section className='pokemon'>
            Search for a pokemon
      <form onSubmit={ handlePokemonSubmit }>
        <label>
            Pokemon Name:
          <input value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <button type="submit">Get pokemon</button>
      </form>
      {
        loading
          ? <LoadingSpinner />
          : <PokemonList pokemons={ pokemons }/>
      }
    </section>
  );

}
