import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import BusinessList from './BusinessList';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState('');


  async function handleYelpSubmit(e) {
    e.preventDefault();

    // set the loading state to true
    setLoading(true);

    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const response = await fetch(`/.netlify/functions/yelp?city=${city}&country=${country}&state=${state}`);
    const json = await response.json();
    setLoading(false);
    setData(json);

    // put the jsonified data in state and set the loading state to false
    console.log(json);
  }

  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={ handleYelpSubmit }>
        Search yelp for a city
        <label>
          City Name:
          <input value={city} onChange={e => setCity(e.target.value)}/>
        </label>
        <label>
          State:
          <input value={state} onChange={e => setState(e.target.value)}/>
        </label>
        <label>
          Country:
          <input value={country} onChange={e => setCountry(e.target.value)}/>
        </label>
        <button>Search yelp</button>
      </form>
      {
        loading
          ? <LoadingSpinner />
          : <BusinessList data={ data }/>
      }
    </section>
  );
}

