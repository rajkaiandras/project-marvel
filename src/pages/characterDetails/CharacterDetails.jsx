import React from 'react';
import { useParams } from 'react-router-dom';

// styles
import './CharacterDetails.css';

export const CharacterDetails = () => {
  const characterId = useParams();
  const { id } = characterId;

  return <div className="CharacterDetails">Character: {id}</div>;
};
