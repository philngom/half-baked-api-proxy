import { useState } from 'react';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [searchBy, setSearchBy] = useState('pokemon');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('pikachu');
  const [pokemons, setPokemons] = useState([]);

  async function handlePokemonSubmit(e) {
    e.preventDefault();

        // set the loading state to true
    setLoading(true);
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const endPointURL = `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchBy}=${name}`;

    const response = await fetch(endPointURL);
    const json = await response.json();

    console.log(json);
    setPokemons(json.results);
        // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form>
            Search pokemon for a pokemon
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <form onSubmit={ handlePokemonSubmit }>
          <label>
            Pokemon Name:
            <input value-={name} onChange={e => setName(e.target.value)}/>
          </label>
        </form>
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      <PokemonList />
    </section>
  );

}
