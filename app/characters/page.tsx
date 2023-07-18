"use client"
import { useQuery, gql } from '@apollo/client';
import apolloClient from '../../apollo-client';
import CharacterCard from '../../components/CharacterCard';
import { Character } from '../../types';
import { useState } from 'react';


const CHARACTERS_QUERY = gql`
query GetCharacters($page: Int!) {
  characters(page: $page) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      image
    }
  }
}
`;

export default function Page() {
  const [page,setPage] = useState(1)

  const { loading, error, data } = useQuery(CHARACTERS_QUERY, {
    client: apolloClient,
    variables: {
      page: page,
    },
  });

  if (loading) {
    return <p className="flex flex-col justify-center items-center w-full">Loading...</p>;
  }

  if (error) {
    return <p className="flex justify-center items-center w-full">Error occurred.</p>;
  }

  const characters = data.characters.results;
  const totalPages = data.characters.info.pages;

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full '>
      <h1 className={'text-3xl my-5'}>Characters</h1>
       <div className='flex justify-between w-full md:w-1/4 p-3 items-center'>
        <button 
          className={page === 1 ? "bg-cyan-500 text-white font-bold py-2 px-4 rounded opacity-50" : "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"}
          onClick={handlePreviousPage}
          disabled={page === 1}
          >
          Previous
        </button>
        Page {page} of {totalPages}
        <button 
          className={page === totalPages ? "bg-cyan-500 text-white font-bold py-2 px-4 rounded opacity-50" : "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"}
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
      {characters.map((character:Character) => (
             <CharacterCard key={character.id} character={character} />
      ))}
      </div>
      <div className='flex justify-between w-full md:w-1/4 p-3 items-center'>
        <button 
          className={page === 1 ? "bg-cyan-500 text-white font-bold py-2 px-4 rounded opacity-50" : "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"}
          onClick={handlePreviousPage}
          disabled={page === 1}
          >
          Previous
        </button>
        Page {page} of {totalPages}
        <button 
          className={page === totalPages ? "bg-cyan-500 text-white font-bold py-2 px-4 rounded opacity-50" : "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"}
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
