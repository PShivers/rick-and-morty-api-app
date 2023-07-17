import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-1"  style={{maxWidth:300}} >
      <img className="w-full" src={character.image} alt={character.name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl mb-2 truncate">{character.name}</div>

      </div>
   </div>
  );
};

export default CharacterCard;
