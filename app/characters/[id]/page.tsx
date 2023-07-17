"use client"
import { useQuery, gql } from '@apollo/client';
import apolloClient from '../../../apollo-client';

const CHARACTER_DETAIL_QUERY = gql`
query GetCharacterById($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    type
    gender
    origin {
      id
      name
      type
      dimension
    }
    location {
      id
      name
      type
      dimension
    }
    image
    created
  }
}
`

export default function Page({params}:{
  params:{id:string}
}){
  const { loading, error, data } = useQuery(CHARACTER_DETAIL_QUERY, {
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
  
  const character = data.character;
  
  return (  
  <div className='w-full flex flex-col justify-center items-center'>
    <img className="w-1/3" src={character.image} alt={character.name}/>
      <h1 className='text-3xl'>{character.name}</h1>
      {character.origin.dimension?<p>({character.origin.dimension})</p>:""}            
      <p className='text-2xl mt-5'>Species: {character.species}</p>
      <p className='text-2xl'> Origin: {character.origin.name}</p>
      <p></p>
      <p className='text-2xl'>Status: {character.status}</p>
    </div>
    )
}