import fetch from 'node-fetch';

const Id = ({ show }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-around mt-10">
        <div className="w-1/4">
          <img src={show.image.original} />
        </div>
        <div className="w-2/4">
          <div className="text-5xl">
            {show.name} <span className="text-base font-thin text-gray-500">({show.premiered})</span>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-600">
              {show.genres.join(', ')} | {show.language}
            </div>
            <div className="text-base font-bold">
              <i className="fas fa-star px-1 text-yellow-500" />
              {show.rating.average} / 10
            </div>
          </div>
          <div className="w-full h-px my-1 bg-color bg-gray-700" />
          <div className="text-base" dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      </div>
    </div >
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`http://api.tvmaze.com/shows/${id}?embed=seasons`);
  const show = await res.json();
  return {
    props: {
      show,
    }
  }
}

export default Id;
