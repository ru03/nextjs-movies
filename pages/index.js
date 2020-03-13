import Head from 'next/head';
import fetch from 'node-fetch';
import Navbar from '../components/navbar/Navbar';
import MovieCard from '../components/movieCard/MovieCard';

const Home = ({ shows }) => {
  return (
      <div className="container mx-auto">
        <div className="mt-5 grid grid-cols-2 gap-4">
          {
            shows.map(show =>
              <MovieCard
                key={show.id}
                name={show.name}
                language={show.language}
                rating={show.rating.average}
                img={show.image.medium}
                summary={show.summary}
              />
            )
          }
        </div>
      </div>
  )
}

export async function getStaticProps(context) {
  const rest = await fetch('http://api.tvmaze.com/shows');
  const shows = await rest.json();

  return {
    props: {
      shows: shows.slice(0, 20),
    }
  }
}

export default Home;
