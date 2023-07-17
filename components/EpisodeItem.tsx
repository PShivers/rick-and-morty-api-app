import React from 'react';
import Link from 'next/link';
import { Episode } from '../types';

interface EpisodeItemProps {
  episode:Episode;
}

const CharacterCard: React.FC<EpisodeItemProps> = ({ episode }) => {
  return (
    <li>
      <Link href={`/episodes/${episode.id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-center text-xl">{episode.name}</div>
          </div>
      </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
