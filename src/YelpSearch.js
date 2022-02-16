import { useState } from 'react';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState('');


  async function handleYelpSubmit(e) {
    e.preventDefault();

    // set the loading state to true

    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL

    // put the jsonified data in state and set the loading state to false
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
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}

