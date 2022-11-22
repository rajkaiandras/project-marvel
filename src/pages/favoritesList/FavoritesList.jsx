import React, { useState } from 'react';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { useFetch } from '../../hooks/useFetch';

// components
import { CharacterCard } from '../../components/characterCard/CharacterCard';

// styles
import './FavoritesList.css';

export const FavoritesList = () => {
  const { user } = useAuthContext();

  // get favorite characters from Firestore
  const { documents, error: errorCollection } =
    useCollection('favoriteCharacters');

  if (documents) console.log(documents);

  return (
    <div className="FavoritesList">
      {errorCollection && <p>{errorCollection}</p>}
      {documents &&
        documents.map((document) => {
          return <p key={document.characterId}>{document.characterId}</p>;
        })}
    </div>
  );
};
