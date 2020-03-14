import Router from 'next/router';
import Link from 'next/link';

const MovieCard = ({ id, name, language, rating, img, summary }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title={name}
      >
        <img
          className="cursor-pointer"
          src={img}
          onClick={() => Router.push(`/shows/${id}`)}
        />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="text-gray-900 font-bold text-xl mb-2">
          {name}
        </div>
        <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: `${summary.slice(0, 199)}...` }} />
        <div>
          <Link href={`/shows/${id}`}>
            <a className="text-sm underline text-blue-500 cursor-pointer">Read more</a>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{language}</p>
            <p className="text-gray-600">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;