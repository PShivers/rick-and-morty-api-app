"use client"
import { useQuery, gql } from '@apollo/client';
import apolloClient from '../../apollo-client';
import EpisodeItem from '../../components/EpisodeItem';
import { Episode } from '../../types';


const EPISODES_QUERY = gql`
query GetEpisodes {
  episodes {
    results {
      id
      name
      air_date
      episode
    }
  }
}
`;

export default function Page() {
  const { loading, error, data } = useQuery(EPISODES_QUERY, {
    client: apolloClient,
  });

  if (loading) {
    return <p className="flex flex-col justify-center items-center w-full">Loading...</p>;
  }

  if (error) {
    return <p className="flex flex-col justify-center items-center w-full">Error occurred.</p>;
  }

  const episodes = data.episodes.results;

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className={'text-3xl my-5'}>Episodes</h1>
      <div className='flex flex-wrap justify-center items-center'>
        <ul>          
        {episodes.map((episode:Episode) => (
            <EpisodeItem key={episode.id} episode={episode}/>
        ))}
        </ul>
 
      </div>

    </div>
  );
}
