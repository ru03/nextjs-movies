import { useState, useCallback } from 'react';
import Head from 'next/head';
import fetch from 'node-fetch';
import Navbar from '../components/navbar/Navbar';
import debounce from '../helpers/debounce/debounce';
import '../css/tailwind.css'

function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const fetchSearchData = async (search) => {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${search}`);
    const results = await res.json();
    setResults(results);
  }

  const debounceSearch = useCallback(debounce(fetchSearchData, 500), []);

  const handlerOnChange = (value) => {
    setSearch(value);
    debounceSearch(value);
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
          integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar
        onChange={({ target: { value } }) => handlerOnChange(value)}
        results={results}
        search={search}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp