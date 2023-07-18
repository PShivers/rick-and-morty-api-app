"use client"
import { useQuery, gql } from '@apollo/client';
import apolloClient from '../../../apollo-client';
import { Character } from '@/types';

const EPISODE_DETAIL_QUERY = gql`
query GetEpisodeById($id: ID!) {
  episode(id: $id) {
    id
    name
    air_date
    episode
    characters {
      id
      name
    }
  }
}

`

export default function Page({params}:{
  params:{id:string}
}){
  const { loading, error, data } = useQuery(EPISODE_DETAIL_QUERY, {
    client: apolloClient,
    variables: {
      id: params.id,
    },
  });
  
  if (loading) {
    return <p className="flex flex-col justify-center items-center w-full">Loading...</p>;
  }
  
  if (error) {
    return <p className="flex justify-center items-center w-full">Error occurred.</p>;
  }
  
  const episode = data.episode;

  return (  
  <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl mb-5'>{episode.name}</h1>
      <p className='text-2xl'> Episode Number: {episode.episode}</p>
      <p className='text-2xl mt-5'>Original Air Date: {episode.air_date}</p>
      <ul>
      {episode.characters.forEach((character:Character)=>{
        return <li>{character.name}</li>
      })}
      </ul>   
    </div>
    )
}