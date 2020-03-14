import fetch from 'node-fetch';
import MovieCard from '../components/movieCard/MovieCard';

const Home = ({ shows }) => {
  return (
      <div className="container mx-auto">
        <div className="mt-5 grid grid-cols-2 gap-4">
          {
            shows.map(show =>
              <MovieCard
                key={show.id}
                id={show.id}
                img={show.image.medium}
                language={show.language}
                name={show.name}
                rating={show.rating.average}
                summary={show.summary}
              />
            )
          }
        </div>
      </div>
  )
}

export async function getStaticProps() {
  const rest = await fetch('http://api.tvmaze.com/shows');
  const shows = await rest.json();

  return {
    props: {
      shows: shows.slice(0, 20),
    }
  }
}

export default Home;
