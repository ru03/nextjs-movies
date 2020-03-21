import { useEffect, useState, memo } from "react";
import Link from 'next/router';

const SeasonEpisodes = ({ seasonId }) => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetchSeasonData();
  }, [seasonId])

  const fetchSeasonData = async () => {
    const res = await fetch(`https://api.tvmaze.com/seasons/${seasonId}/episodes`);
    const data = await res.json();
    setEpisodes([...data]);
  }
  return (
    <div className="flex justify-center flex-col border-r border-l border-b rounded-b p-3">
      {episodes.map(episode => (
        <div
          key={episode.id}
          className="flex flex-row my-2 border rounded"
        >
          <div className="w-1/4">
            <img
              className="cursor-pointer"
              src={episode.image ? episode.image.medium : ''}
            />
          </div>
          <div className="w-1/3 flex flex-col justify-around ">
            <div className="text-xl font-bold">Name: <span className="text-base font-normal">{episode.name}</span></div>
            <div className="text-xl font-bold">Air Date: <span className="text-base font-normal">{episode.airdate}</span></div>
            <div className="text-xl font-bold">Runtime: <span className="text-base font-normal">{episode.runtime}</span></div>
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default SeasonEpisodes;