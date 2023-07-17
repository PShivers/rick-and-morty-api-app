import React from 'react';
import Link from 'next/link';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link href={`/characters/${character.id}`}>
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-1" >
        <img className="w-full" src={character.image} alt={character.name}/>
        <div className="px-6 py-4">
          <div className="font-bold text-center text-xl mb-2 truncate">{character.name}</div>
        </div>
   </div>
    </Link>

  );
};

export default CharacterCard;
