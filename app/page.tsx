"use client"
import { useQuery, gql } from '@apollo/client';
import apolloClient from '../apollo-client';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../types';


const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function Page() {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY, {
    client: apolloClient,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred.</p>;
  }

  const characters = data.characters.results;

  return (
    <div className='flex flex-col justify-center items-center w-full '>
      <h1 className={'text-3xl my-5'}>Rick and Morty Characters</h1>
      <div className='flex flex-wrap justify-center items-center'>
      {characters.map((character:Character) => (
             <CharacterCard key={character.id} character={character} />
      ))}
      </div>

    </div>
  );
}
