import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="m-1">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
