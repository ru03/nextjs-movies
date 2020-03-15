import { useRouter } from 'next/router';
import Error from 'next/error';
import fetch from 'node-fetch';
import Link from 'next/link';

const Shows = ({ shows, page }) => {
  const router = useRouter();
  const path = (page) => `/shows?page=${page}`;

  // If there aren't shows in this page, redirect to Error page
  if (!shows.length) return <Error statusCode="404" />

  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-col">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Language</th>
              <th className="px-4 py-2"><i className="fas fa-star px-1 text-yellow-500" /></th>
            </tr>
          </thead>
          <tbody>
            {shows.map((show, i) => {
              const even = i % 2 ? 'bg-gray-300' : 'bg-red-300';
              return (
                <Link key={show.id} href={`/shows/${show.id}`}>
                  <tr className="cursor-pointer">
                    <td className={`border px-4 py-2 ${even} font-bold`}>{show.name}</td>
                    <td className={`border px-4 py-2 ${even} text-center`}>{show.language}</td>
                    <td className={`border px-4 py-2 ${even} text-center`}>{show.rating.average || 'X'}</td>
                  </tr>
                </Link>
              )
            })}
          </tbody>
        </table>
        <div className="flex justify-around py-2">
          <button
            disabled={parseInt(page) === 0}
            className="rounded bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4"
            onClick={() => router.push(path(parseInt(page) - 1))}>Previous</button>
          <button
            className="rounded bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4"
            onClick={() => router.push(path(parseInt(page) + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page;
  const res = await fetch(`http://api.tvmaze.com/shows?page=${page}`);
  const shows = await res.json();

  return {
    props: {
      shows,
      page,
    }
  }
}

export default Shows;