import '../../index.css';
import { DefaultApi, Episode } from '../../lib/rick-and-morty-api-client';
import { useEffect, useState } from 'react';
import EpisodeCover from './EpisodeCover';
import { charactersToCover, generateRecommendations } from '../utils/episodeUtils';

const EpisodeRecommendations = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api.getEpisodesById({ ids: generateRecommendations(1, 51, 6) }).then((response) => {
      setEpisodes(response);
    });
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {episodes.map((episode) => (
          <li key={episode.id} className="bg-white rounded-2xl shadow-sm p-4">
            <EpisodeCover
              details={{
                name: episode.name!,
                airDate: episode.airDate!,
                season: episode.episode!,
                coverUrl: charactersToCover(episode.characters!),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeRecommendations;
