"use client"
import { useQuery, gql } from '@apollo/client';
import apolloClient from '../apollo-client';

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
    <div>
      <h1>Rick and Morty Characters</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
}
